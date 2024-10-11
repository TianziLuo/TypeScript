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

    // tuple(固定长度，类型不同意，顺序)
    const f: [number,string] = [1,"hello"];
    const g: [number,number,string]= [1,1,"2"];

    // object (key-value pairs)
    // JSON.stringify()：将对象或数组转换为 JSON 字符串，适合数据传输。
    // JSON.parse()：将 JSON 字符串转换为 JavaScript 对象，适合解析服务器响应。
      interface Person {
        name: string;
        age: number;
      }

      interface Employee extends Person {
        position: string;
      }

      const h: Employee ={
        name: 'David',
        age: 25,
        position: "developer"
      };

    //types: a blueprint or contract that an object must follow, but they disappear at runtime.
    type Car = {
      make: string;
      model: string;
      year: number;
    }

    const myCar: Car = {
      make:'toyota',
      model:'Camry',
      year:2024
    }

    // set: collections of unique values:
    const uniqueNumbers: Set<number> = new Set<number>();
    uniqueNumbers.add(1);
    uniqueNumbers.add(2);
    uniqueNumbers.add(1);

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
          <br />
          {`object: ${JSON.stringify(h)}`}
          <br />
          {`type: ${JSON.stringify(myCar)}`}
          <br />
          {`Set: ${JSON.stringify([...uniqueNumbers])}`}
          </p>
      </div>
    )
  
}

export default App;
