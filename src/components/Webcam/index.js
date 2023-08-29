import React, {useRef, useEffect} from 'react';

const Webcam = () => {
    return (
        <div>
            <img
                alt='webcam'
                src='http://moontruck.local:8080/?action=stream'
                width='800'
                height='640'
                className='object-cover w-full h-full rotate-180'
            />
        </div>
    );
};

export default Webcam;
