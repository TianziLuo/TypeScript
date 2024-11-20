import React from "react";

interface GrandChildProps {
    childInput: number;
    setChildInput: React.Dispatch<React.SetStateAction<number>>;

}

const GrandChildCom: React.FC<GrandChildProps> = ({childInput, setChildInput}:GrandChildProps) => {
    const handleChick = () =>{
        setChildInput(c => c+1)
    }

    return (
        <div>
            <button onClick={handleChick}> click </button>
            <p>{childInput}</p>
        </div>
    )
}
export default GrandChildCom