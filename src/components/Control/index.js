import React, {useState} from 'react';
import pfeil from '../../images/arrow.png';
import stop from '../../images/stop.png';
import play from '../../images/play.png';
import double from '../../images/double.png';

function Control({handleAction}) {
    const [isAutoMode, setIsAutoMode] = useState(false);

    const toggleAutoMode = async () => {
        try {
            if (isAutoMode) {
                // Wenn im Auto-Modus, sende den Befehl zum Stoppen
                await handleAction('stopautonom');
            } else {
                // Wenn nicht im Auto-Modus, sende den Befehl zum Starten
                await handleAction('startautonom');
            }
            // Aktualisiere den Zustand des Auto-Modus
            setIsAutoMode(!isAutoMode);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='Control grid grid-cols-3 gap-4 mt-9'>
            <button
                onClick={() => handleAction('forwardleft')}
                className='mr-3'
            >
                <img src={pfeil} alt='pfeil' className=' rotate-180' />
            </button>
            <button onClick={() => handleAction('forward')} className='mr-3 '>
                <img src={pfeil} alt='pfeil' className=' rotate-[270deg] ' />
            </button>
            <button
                onClick={() => handleAction('forwardright')}
                className='mr-3'
            >
                <img src={pfeil} alt='pfeil' className='  ' />
            </button>

            <button onClick={() => handleAction('left')} className='mr-3'>
                <img src={pfeil} alt='pfeil' className=' rotate-180' />
            </button>

            <button onClick={() => handleAction('stop')} className='mr-3'>
                <img src={stop} alt='stop' className=' rotate-180' />
            </button>
            <button onClick={() => handleAction('right')} className='mr-3'>
                <img src={pfeil} alt='pfeil' className='  ' />
            </button>

            <button
                onClick={() => handleAction('backwardleft')}
                className='mr-3'
            >
                <img src={pfeil} alt='pfeil' className=' rotate-180' />
            </button>

            <button onClick={() => handleAction('backward')} className='mr-3'>
                <img src={pfeil} alt='pfeil' className=' rotate-90' />
            </button>

            <button
                onClick={() => handleAction('backwardright')}
                className='mr-3'
            >
                <img src={pfeil} alt='pfeil' className='  ' />
            </button>
            <button
                onClick={() => handleAction('sidestepleft')}
                className='mr-3'
            >
                <img src={double} alt='pfeil' className=' rotate-180 ' />
            </button>
            <button onClick={toggleAutoMode} className='mr-3'>
                {isAutoMode ? 'Stop Auto mode' : 'Start Auto mode'}
            </button>
            <button
                onClick={() => handleAction('sidestepright')}
                className='mr-3'
            >
                <img src={double} alt='pfeil' className='  ' />
            </button>
        </div>
    );
}

export default Control;
