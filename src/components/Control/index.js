import React, {useState} from 'react';
import './style.css';

import stop from '../../images/stop.png';
import links from '../../images/links.png';
import oben from '../../images/oben.png';
import rechts from '../../images/rechts.png';
import unten from '../../images/unten.png';
import obenlinks from '../../images/obenlinks.png';
import obenrechts from '../../images/obenrechts.png';
import untenlinks from '../../images/untenlinks.png';
import untenrechts from '../../images/untenrechts.png';
import linkslinks from '../../images/linkslinks.png';
import rechtsrechts from '../../images/rechtsrechts.png';

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
        <div className='Control grid grid-cols-3 gap-4 mt-9 justify-items-stretch'>
            <button
                onClick={() => handleAction('forwardleft')}
                className='justify-self-center'
            >
                <img src={obenlinks} alt='pfeil' className=' ' />
            </button>

            <button onClick={() => handleAction('forward')} className='justify-self-center '>
                <img src={oben} alt='pfeil' className='  ' />
            </button>

            <button
                onClick={() => handleAction('forwardright')}
                className='justify-self-center'
            >
                <img src={obenrechts} alt='obenrechts' className='  ' />
            </button>

            <button onClick={() => handleAction('left')} className='justify-self-center'>
                <img src={links} alt='pfeil' className=' ' />
            </button>

            <button onClick={() => handleAction('stop')} className='justify-self-center'>
                <img src={stop} alt='stop' className=' ' />
            </button>
            <button onClick={() => handleAction('right')} className='justify-self-center'>
                <img src={rechts} alt='pfeil' className='  ' />
            </button>

            <button
                onClick={() => handleAction('backwardleft')}
                className='justify-self-center'
            >
                <img src={untenlinks} alt='pfeil' className=' ' />
            </button>

            <button onClick={() => handleAction('backward')} className='justify-self-center'>
                <img src={unten} alt='pfeil' className=' ' />
            </button>

            <button
                onClick={() => handleAction('backwardright')}
                className='justify-self-center'
            >
                <img src={untenrechts} alt='pfeil' className='  ' />
            </button>
            <button
                onClick={() => handleAction('sidestepleft')}
                className='justify-self-center'
            >
                <img src={linkslinks} alt='linkslinks' className='  ' />
            </button>
            <button onClick={toggleAutoMode} className='auto justify-self-center'>
                {isAutoMode ? 'Stop Auto mode' : 'Start Auto mode'}
            </button>
            <button
                onClick={() => handleAction('sidestepright')}
                className='justify-self-center'
            >
                <img src={rechtsrechts} alt='rechtsrechts' className='  ' />
            </button>
        </div>
    );
}

export default Control;
