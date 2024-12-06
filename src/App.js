import { useState } from 'react';
import './App.css';
import { data } from './data';
import bg from './bg.jpg'


function App() {
  let [ntask, setnTask]=useState([]);

const addNewTask=(event)=>{  
  let task = event.target.task.value;

  if(!ntask.includes(task)){
    let finalList=[...ntask, task];
    setnTask(finalList)
    event.target.task.value = "";
  } else{
    alert("Task Already Added")
  }

  event.preventDefault();
  
}

let list = ntask.map((v,i)=>{
  return(
    <TodoListTask value={v} key={i} indexNum={i} ntask={ntask} setnTask={setnTask}/>
  )
  
})
  return(
    <div className='main'>
      <h1>Write Your Task to complete - ToDo List</h1>
        <div className='newTask'>
          <form onSubmit={addNewTask}>
          <input type='text' name='task' placeholder='Write New Task' className='taskInput'/>
          <button type='submit'>Create</button>
          </form>
        </div>
      <div className='listContainer'>
        <h3 className='listHead'>To-Do List</h3>  
        {list} 
      </div>
      <div className='bgImage'>
      </div>
      <div className='identity'>
        <h3>Developed by Owais Qazi</h3>
      </div>

    </div>
  )
}

export default App;

function TodoListTask ({value, indexNum, ntask, setnTask}){
  
  let [checkStatus, setStatus]=useState(false);

  let deleteTask=()=>{    
    let finalList = ntask.filter((v,i)=>i!=indexNum);
    setnTask(finalList);
  }



  return(    
    <li className={`taskList ${checkStatus ? "strikeTask" : ""} `} onClick={()=>setStatus(!checkStatus)}>{indexNum+1}   {value}<span className='closeBtn' onClick={deleteTask} >X</span></li>
    
  )
}
