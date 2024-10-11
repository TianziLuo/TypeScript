import Parent from "./Parent";

class Child extends Parent{
    private relationship: string;
    private sonName: string;

    constructor(props:any){
        super(props);
        this.state = {
            age: 26,
        }
        this.sonName = 'Jonathan';
        this.relationship = 'son'; 
        
    }

    public greetChild(): string{
        return `Hello, my name is ${this.sonName} and I am ${this.state.age}, I'm the ${this.name}'s ${this.relationship}`
    }

    render(){
        return(
            <div>
            <h1>Child Component</h1>
            <p>{this.greetChild()}</p>
            </div>
        )
    }
}
export default Child