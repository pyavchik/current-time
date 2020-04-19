import React from 'react';
import './App.css';

function App() {
    const getTime = () => {
        return (new Date().toLocaleTimeString())
    }

    return (
        <div>
            < div> Current
                Time:
            </div>
            <h3>{getTime()}</h3>
        </div>
    );
}

export default App;
