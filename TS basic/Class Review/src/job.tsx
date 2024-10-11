import React from "react";

interface jobDesProps{};

interface jobDes{
    position: string,
    salary: number,
}

class Job extends React.Component<jobDesProps,jobDes>{

    public companynName: string;

    constructor(props:jobDesProps){
        super(props)
        this.companynName = "UP";
        this.state = {
            position: 'Customer Service',
            salary: 3000,
        }
    }

    render(){
        return(
            <div>
                <h1></h1>
                <p></p>
            </div>
        );
    }
}

export default Job