import React, {useState} from 'react';
import axios from 'axios';

function BackwardControl() {
    const [currentSpeed, setCurrentSpeed] = useState(1); // Startgeschwindigkeit von 1

    const decreaseSpeed = () => {
        const newSpeed = currentSpeed - 0.1;

        if (newSpeed >= -1) {
            setCurrentSpeed(newSpeed);
            setMotorSpeed(newSpeed);
        }
    };

    const setMotorSpeed = async (speed) => {
        const apiUrl = 'http://moontruck.local:5000/backward'; // Die API-URL anpassen
        try {
            const response = await axios.post(apiUrl, {speed});
            console.log(response.data.message);
        } catch (error) {
            console.error('Error setting speed:', error);
        }
    };

    return (
        <div>
            <h2>Backward Control</h2>
            <p>Current Speed: {currentSpeed.toFixed(1)}</p>
            <button onClick={decreaseSpeed} disabled={currentSpeed <= -1}>
                Decrease Speed
            </button>
        </div>
    );
}

export default BackwardControl;
