import { useState } from "react";

export const useCounter = (initCounter, { max, min }) => {
    const [counter, setCounter] = useState(initCounter);
    const incrementCounter = (step = 1) => {
        if (counter < max) {
            setCounter(counter + step);
        }
    }
    
    const resetCounter = () => {
        setCounter(initCounter);
    }

    const decrementCounter = (step = 1) => {
        if (counter > min) {
            setCounter(counter - step);
        }
    }
    return [counter, incrementCounter, decrementCounter, resetCounter];
};