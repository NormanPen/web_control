import React from 'react';

function Control({handleAction}) {
    return (
        <div className='Control'>
            <button onClick={() => handleAction('forward')}>Forward</button>
            <button onClick={() => handleAction('backward')}>Backward</button>
            <button onClick={() => handleAction('left')}>Left</button>
            <button onClick={() => handleAction('right')}>Right</button>
            <button onClick={() => handleAction('stop')}>Stop</button>
            <button onClick={() => handleAction('sidestepleft')}>
                Sidestep Left
            </button>
            <button onClick={() => handleAction('sidestepright')}>
                Sidestep Right
            </button>
            <button onClick={() => handleAction('forwardleft')}>
                Forward Left
            </button>
            <button onClick={() => handleAction('forwardright')}>
                Forward Right
            </button>
            <button onClick={() => handleAction('backwardleft')}>
                Backward Left
            </button>
            <button onClick={() => handleAction('backwardright')}>
                Forward Right
            </button>
        </div>
    );
}

export default Control;
