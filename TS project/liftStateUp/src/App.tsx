import {useState} from "react";
import ChildComponent from "./component/childCom"

function App() {
  const [input, setInput] = useState("initial value");
    
  return (
    <>
      <ChildComponent input={input} setInput={setInput} />
    </>
  );
}

export default App
