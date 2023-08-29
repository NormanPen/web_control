import React, {useState} from 'react';
import axios from 'axios';

const SpeedControlButton = () => {
    const [isPressed, setIsPressed] = useState(false);

    const handleButtonPress = () => {
        setIsPressed(true);
        sendSpeed(1);
    };

    const handleButtonRelease = () => {
        setIsPressed(false);
        sendSpeed(0);
    };

    const sendSpeed = (speed) => {
        axios
            .post('http://moontruck.local:5000/forward', {speed})
            .then((response) => {
                console.log(response.data.message);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <h1>Speed Control Button</h1>
            <button
                onMouseDown={handleButtonPress}
                onMouseUp={handleButtonRelease}
            >
                {isPressed ? 'Released' : 'Pressed'}
            </button>
        </div>
    );
};

export default SpeedControlButton;
