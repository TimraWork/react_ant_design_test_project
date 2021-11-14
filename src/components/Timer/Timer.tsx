import React from 'react';
import { useState, useEffect } from 'react';
import './Timer.scss';

export type ITimerProps = {
    initialSeconds?: number
}

const Timer: React.FC<ITimerProps> = ({ initialSeconds = 0 }) => {
    const [ seconds, setSeconds ] =  useState(initialSeconds);

    useEffect(() => {
        let timerInterval = setInterval( () => setSeconds(seconds + 1), 1000);
        return () => clearInterval(timerInterval);
    });

    return <div className="Timer"> Прошло - {seconds} секунд </div>;
}

export { Timer };