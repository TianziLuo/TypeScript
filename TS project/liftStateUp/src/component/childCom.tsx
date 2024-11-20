import React, {useState} from "react";
import GrandChildCom from './grandChildCom';

interface ChildProps {
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
}


const ChildComponent:React.FC<ChildProps> = ( {input,setInput}:ChildProps ) => {
    const [childInput, setChildInput] = useState<number>(0);
    
    return (
        <div>
            <button onClick = {() => setInput('updated!')}>
                click to update: {input}
            </button>
            <GrandChildCom setChildInput={setChildInput} childInput={childInput} />
        </div>
    )
}
export default ChildComponent