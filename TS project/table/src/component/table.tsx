import React from "react";

export interface User {
    id:number;
    name: string;
    age: number;
    isAdmin: boolean;
    position: string;
}

interface UserTableProps{
    data: User[];
}

const UserTable:React.FC<UserTableProps> = ({data}) =>{
    return (
        <table>
            <thead>
                <tr>
                    <th> Name </th>
                    <th> Age </th>
                    <th> isAdmin </th>
                    <th> Position </th>
                </tr>
            </thead>
            <tbody>
                {data.map((user) =>(
                 <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.isAdmin ? "Yes" : "No"}</td>
                    <td>{user.position}</td>
                 </tr>   
                ))}
            </tbody>
        </table>
    )
};
export default UserTable;