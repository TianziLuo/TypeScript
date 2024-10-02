import React from 'react';
import './App.css'

const App: React.FC = () =>{
    const a: number = 1;
    // array of string
    const b: string[]= ["12345","23456"];
    // single string
    const c: string = "12345";
    // mixed array
    const d: (number|string|boolean)[] = [123,"hi",true];
    // boolean
    const e: boolean = true;

    //tuple(固定长度，类型不同意，顺序)
    const f: [number,string] = [1,"hello"];
    const g: [number,number,string]= [1,1,"2"];

    //object


    return(
      <div>
        <p>
          {`value:${a}`}
          <br />
          {`array of string:${b}`}
          <br />
          {`single string: ${c}`}
          <br />
          {`mixed array first element:${d[0]}`}
          <br />
          {`boolean: ${e}`}
          <br />
          {`tuple: ${f} ${g}`}
        </p>
      </div>
    )
  
}

export default App;
