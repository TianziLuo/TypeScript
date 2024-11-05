import React from "react";

export interface Exercise {
    name: string;
    price: number;
    isAvailable: boolean;
    quantity: number;
}

interface ExerciseProps {
    data: Exercise[]
}

const Ex: React.FC<ExerciseProps> = ({data}) =>{
    return(
        <div>
            {data.map((value,index) =>(
                <div key={index}>
                <p> name: {value.name} </p>
                <p> price: {value.price} </p>
                <p> isAvailabel: {value.isAvailable ? 'YES': 'NO'} </p>
                <p> quantity: {value.quantity} </p>
                </div>
            ))}
        </div>
    )
}
export default Ex