//import React, {useRef, useEffect} from 'react';

const Webcam = () => {
    return (
        <div className='border-2'>
            <img
                alt='webcam'
                src='http://192.168.4.1:8080/?action=stream'
                width='800'
                height='640'
                className='object-cover w-full h-full rotate-180'
            />
        </div>
    );
};

export default Webcam;
