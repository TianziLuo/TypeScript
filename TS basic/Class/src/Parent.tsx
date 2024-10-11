import React from "react";

// Define an empty interface for props (since there are no props in this example)
interface ParentProps{} 

// Define the structure of the state with two properties: name and age
interface ParentState{
    age: number;
}

class Parent extends React.Component<ParentProps, ParentState>{

    public name: string;

    constructor(props:ParentProps){
        super(props);
        this.name = 'John';
        this.state = {
            age: 56,
        }
    }

    public greet(): string{
        return `Hello, my name is ${this.name} and I am ${this.state.age} years old.`;
    }

    render(){
        return(
            <div>
                <h1>Parent Component</h1>
                <p>{this.greet()}</p>
            </div>
        )
    }
}

export default Parent