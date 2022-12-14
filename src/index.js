import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const Context = createContext({
    title: '',
    description: '',
});

export const useStore = () => {
    const store = React.useContext(Context);
    return store;
};

const MyProvider = ({ store, children }) => {
    return <Context.Provider value={store}>{children}</Context.Provider>;
};

ReactDOM.render(
    <MyProvider store={{ title: 'Hello', description: 'World' }}>
        <App />
    </MyProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
