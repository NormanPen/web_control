import React, {useState} from 'react';

//import BackwardControl from './components/BackwardControl';
//import SpeedControl from './components/SpeedControl';
//import SpeedControlComponent from './components/SpeedControlComponent';
import Control from './components/Control';


const {default: Webcam} = require('./components/Webcam');

function App() {
    const [status, setStatus] = useState('');

    const handleAction = async (action) => {
        try {
            const response = await fetch(`http://192.168.4.1:5000/${action}`, {
                method: 'GET',
            });
            const data = await response.json();
            setStatus(data.message);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='App max-w-sm mx-auto mt-5'>
            <Webcam />
            <Control handleAction={handleAction} />

        </div>
    );
}

export default App;
