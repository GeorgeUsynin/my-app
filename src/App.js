import React from 'react';
import './App.css';
import Tabs, { Tab } from './components/Tabs';

const App = () => {
    return (
        <div>
            <Tabs>
                <Tab title='First tab' content='Hello World' />
                <Tab title='Second tab' content='Hello World 2' />
                <Tab title='Third tab' content='Hello World 3' />
            </Tabs>
        </div>
    );
};

export default App;
