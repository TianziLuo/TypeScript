import './App.css'
import UserTable from './component/table';
import { User } from './component/table';
import Ex from './component/class';
import { Exercise } from './component/class';

function App() {
  const users: User[] = [
    { id:1, name: 'Alice', age: 25, isAdmin: true, position: 'PM'},
    { id:2, name: 'Bob', age: 30, isAdmin: true, position: 'SBD' },
    { id:3, name: 'Charlie', age: 28, isAdmin: false, position: 'CS' },
  ];

  const mydata: Exercise[] = [
    { name:'p1', price: 20, isAvailable: true, quantity:10 },
    { name:'p2', price: 25, isAvailable: false, quantity:0 },
  ]

  return (
    <div>
      <h1>User Table</h1>
      <UserTable data={users} />
      <Ex data = {mydata} />
    </div>
  );
};


export default App
