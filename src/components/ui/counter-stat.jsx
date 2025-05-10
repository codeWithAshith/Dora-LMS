"use client";

import { useEffect, useState } from "react";

const CounterStat = ({end, duration = 2000}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = end/(duration/16);
        const counter = setInterval(() => {
            start += increment;
            if(start >= end) {
                clearInterval(counter);
                setCount(end);
            } else {
                setCount(Math.ceil(start));
            }
        }, 16);
        return () => clearInterval(counter);
    }, [end, duration]);
    
    return <span className="tex-4xl font-bold text-blue-700"> {count}+</span>
}

export default CounterStat;