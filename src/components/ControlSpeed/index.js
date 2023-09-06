import React, { useState, useEffect } from 'react';

function ControlSpeed({ handleAction }) {
    const [isAutoMode, setIsAutoMode] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        if (intervalId) {
            clearInterval(intervalId); // Beim Entfernen des Intervalls
        }
    }, []);

    const startAutoMode = async (action) => {
        // Setzen Sie ein Intervall, um die Aktion in regelmäßigen Abständen auszuführen
        const id = setInterval(async () => {
            await handleAction(action);
        }, 1000); // Ändern Sie den Intervallzeitraum nach Bedarf

        setIntervalId(id);
    };

    const stopAutoMode = () => {
        // Löschen Sie das Intervall, um die Aktion zu stoppen
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    const toggleAutoMode = async () => {
        try {
            if (isAutoMode) {
                // Wenn im Auto-Modus, stoppen Sie den Auto-Modus
                stopAutoMode();
            } else {
                // Wenn nicht im Auto-Modus, starten Sie den Auto-Modus
                startAutoMode('startautonom');
            }
            // Aktualisiere den Zustand des Auto-Modus
            setIsAutoMode(!isAutoMode);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='Control grid grid-cols-3 gap-4'>
            <button
                onMouseDown={() => startAutoMode('forwardleft')}
                onMouseUp={() => stopAutoMode()}
                className='mr-3'
            >
                Forward Left
            </button>
            <button
                onMouseDown={() => startAutoMode('forward')}
                onMouseUp={() => stopAutoMode()}
                className='mr-3 border-4 '
            >
                Forward
            </button>
            <button
                onMouseDown={() => startAutoMode('forwardright')}
                onMouseUp={() => stopAutoMode()}
                className='mr-3'
            >
                Forward Right
            </button>
            {/* Fügen Sie ähnliche onMouseDown und onMouseUp Ereignisse für andere Tasten hinzu */}
            {/* ... */}
            <button onClick={toggleAutoMode} className='mr-3'>
                {isAutoMode ? 'Stop Auto Mode' : 'Start Auto Mode'}
            </button>
        </div>
    );
}

export default ControlSpeed;
