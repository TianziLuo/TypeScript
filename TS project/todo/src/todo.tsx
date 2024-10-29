import React,{ useState} from "react";

const Todo: React.FC  = () =>{
    const [newToDo, setNewToDo] = useState<string>('');
    const [toDoList,setToDoList] = useState<string[]>([]);


    const inputItem = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setNewToDo(e.target.value)
    }
    
    const addTodo = () =>{
        if (newToDo.trim() !== ""){
            setToDoList([...toDoList,newToDo]);
        }
        setNewToDo('');
    }
 
    const itemDelet = (key: number) =>{
        setToDoList(toDoList => toDoList.filter((_,index) => index !== key));

    }

    const itemUp = (key:number) =>{
        setToDoList((toDoList) => {
            if(key > 0){
                const currentList= [...toDoList];
                [currentList[key],currentList[key-1]] = [currentList[key-1],currentList[key]];
                return currentList
            }

            return toDoList
        });
    }

    const itemDown = (key:number) =>{
        setToDoList((toDoList) => {
            if(key < toDoList.length-1){
                const currentList= [...toDoList];
                [currentList[key],currentList[key+1]] = [currentList[key+1],currentList[key]];
                return currentList
            }
            return toDoList
        });
    }
    return(
        <div>
            <div className="input-part">
                <input type="text" className="new-todo" value={newToDo}  onChange={inputItem}/>
                <button className="add-button" onClick={addTodo}>Submit</button>
            </div>

            <div className="to-do-list">
                {toDoList.map((task, index) => (
                    <li key={index}>
                        <p className="task">{task}</p>
                        <br />
                        <button onClick={() =>itemUp(index)}> Up </button>
                        <button onClick={() =>itemDelet(index)}> Delete </button>
                        <button onClick={() =>itemDown(index)}> Down </button>
                    </li>
                ))}
            </div>

        </div>
    )
}
export default Todo