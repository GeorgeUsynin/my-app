import React from 'react';
import MediumClap from './components/MediumClap/MediumClap';
import './App.css';

import { api, connection } from './ws';

const App = () => {
    const [markets, setMarkets] = React.useState([]);
    const [market_dispaly_names, setMarketDispalyNames] = React.useState([]);
    const [pairs, setPairs] = React.useState([]);
    const [tick, setTick] = React.useState('');
    const [selected_pair, setSelectedPair] = React.useState('');

    React.useEffect(() => {
        connection.addEventListener('open', () => {
            console.log('Is open !');
        });
        connection.addEventListener('message', res => {
            const data = JSON.parse(res.data);
            if (data.msg_type === 'active_symbols') {
                console.log('active_symbols', data.active_symbols);
                setMarkets(data.active_symbols);
                const unique_market_names = [...new Set(data.active_symbols.map(sym => sym.market_display_name))];
                setMarketDispalyNames(unique_market_names);
                const default_pairs = data.active_symbols
                    .filter(sym => sym.market_display_name === unique_market_names[0])
                    .map(sym => sym.display_name);
                setPairs(default_pairs);
                setSelectedPair(default_pairs[0]);
            }
        });
    }, []);

    React.useEffect(() => {
        if (!selected_pair) return;

        const tickResponse = res => {
            const data = JSON.parse(res.data);
            if (data.error !== undefined) {
                console.log('Error : ', data.error.message);
            } else if (data.msg_type === 'tick') {
                setTick(data.tick.ask);
            }
        };

        connection.addEventListener('message', tickResponse);

        const symbol = markets.find(sym => sym.display_name === selected_pair).symbol;

        console.log('symbol', symbol);

        const tickStream = () => api.subscribe({ ticks: symbol });

        tickStream();

        return () => {
            connection.removeEventListener('message', tickResponse, false);
            tickStream().unsubscribe();
        };
    }, [selected_pair]);

    const getActiveSymbols = () => {
        api.activeSymbols({ active_symbols: 'brief', product_type: 'basic' });
    };

    console.log('getActiveSymbols', getActiveSymbols);

    const changeMarketHandler = e => {
        const new_pairs = markets
            .filter(sym => sym.market_display_name === e.currentTarget.value)
            .map(sym => sym.display_name);
        setPairs(new_pairs);
        setSelectedPair(new_pairs[0]);
    };

    const changePair = e => {
        setSelectedPair(e.currentTarget.value);
    };

    return (
        <div>
            <div id='clap-container'>
                <MediumClap />
                <MediumClap />
                <MediumClap />
                <MediumClap />
            </div>
            <button onClick={getActiveSymbols}>Get active symbols</button>
            <div>
                <select onChange={changeMarketHandler}>
                    {market_dispaly_names.map((market_display_name, idx) => {
                        return (
                            <option value={market_display_name} key={idx}>
                                {market_display_name}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div>
                <select onChange={changePair}>
                    {pairs.map((pair, idx) => {
                        return (
                            <option value={pair} key={idx}>
                                {pair}
                            </option>
                        );
                    })}
                </select>
            </div>
            <p>{tick}</p>
        </div>
    );
};

export default App;
