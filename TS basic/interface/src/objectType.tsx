
interface User{
    id: number;
    name: string;
    age:number;
    email:string;
    isAdmin:boolean
}

const user: User = {
    id:1,
    name:'Trump',
    age:88,
    email:'trump@gmail.com',
    isAdmin:true,
};

export default user
