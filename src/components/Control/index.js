import React from 'react';

function Control({handleAction}) {
    return (
        <div className='Control grid grid-cols-3 gap-4'>
            <button
                onClick={() => handleAction('forwardleft')}
                className='mr-3'
            >
                Forward Left
            </button>
            <button
                onClick={() => handleAction('forward')}
                className='mr-3 border-4 '
            >
                Forward
            </button>
            <button
                onClick={() => handleAction('forwardright')}
                className='mr-3'
            >
                Forward Right
            </button>

            <button onClick={() => handleAction('left')} className='mr-3'>
                Left
            </button>

            <button onClick={() => handleAction('stop')} className='mr-3'>
                Stop
            </button>
            <button onClick={() => handleAction('right')} className='mr-3'>
                Right
            </button>

            <button
                onClick={() => handleAction('backwardleft')}
                className='mr-3'
            >
                Backward Left
            </button>

            <button onClick={() => handleAction('backward')} className='mr-3'>
                Backward
            </button>

            <button
                onClick={() => handleAction('backwardright')}
                className='mr-3'
            >
                Backward Right
            </button>
            <button
                onClick={() => handleAction('sidestepleft')}
                className='mr-3'
            >
                Sidestep Left
            </button>
            <button className='mr-3'>Platzhalter</button>
            <button
                onClick={() => handleAction('sidestepright')}
                className='mr-3'
            >
                Sidestep Right
            </button>
        </div>
    );
}

export default Control;
