import UserTable from './component/table';
import './App.css'
import { User } from './component/table';

function App() {
  const users: User[] = [
    { id:1, name: 'Alice', age: 25, isAdmin: true, position: 'PM'},
    { id:2, name: 'Bob', age: 30, isAdmin: true, position: 'SBD' },
    { id:3, name: 'Charlie', age: 28, isAdmin: false, position: 'CS' },
  ];

  return (
    <div>
      <h1>User Table</h1>
      <UserTable data={users} />
    </div>
  );
};


export default App
