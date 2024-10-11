import Job from "./job";

class MyJob extends Job{

    constructor(props:any){
        super(props);
        this.state = {
            position: "Front end developer",
            salary: 8000,
        }
    }

    public show(): string{
        return `Our company is ${this.companynName}, We are looking for a ${this.state.position} and the salary is ${this.state.salary}`
    }

    render(){
        return(
            <div>
            <h1>Job Post</h1>
            <p>{this.show()}</p>
            </div>
        )
    }
    
}

export default MyJob