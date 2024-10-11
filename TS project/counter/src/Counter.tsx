import React,{useState} from "react";

// defining the interface with required props
interface CounterProps {
    initialCount: number;  // The "?" is used in interfaces or type definition to specify a property is optional
}

const Count: React.FC<CounterProps> = ({initialCount}) =>{

    const [count, setCount] = useState<number>(initialCount);

    const handleIncrease = () => {
        setCount (count => count+1);
    };

    const handleDecrease = () => {
        setCount(count => count-1);
    }
    const handleReset = () =>{
        setCount(initialCount);
    }

    return(
        <div> 
            <h1> Counter in TS</h1>
            <h2> Count: {count}</h2>
            <button onClick={handleIncrease}>
                Increment
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
            <button onClick={handleDecrease}>
                Decrement
            </button>
        </div>
    )
}

export default Count