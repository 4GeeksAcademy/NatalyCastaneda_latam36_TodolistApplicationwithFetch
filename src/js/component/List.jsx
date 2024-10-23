import React, { useState } from 'react'

export const List = () => {
    const [task, setTask] = useState("")
    const [listTask, setListTask] = useState([])
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setListTask(
                [...listTask, task]
            );
        }
    }
    const deleteTask = (index) => {
        var newList = [...listTask];
        newList.splice(index, 1)
        setListTask (newList)
        console.log(newList)
        
    }
    return (
        <div className='masterContainer'>
            <div></div>
            <div>
                <h1> Tasks </h1>
            </div>
            <div className='containerList'>
                <input type="text" placeholder='What needs to be done?' onKeyDown={handleKeyDown} value={task} onChange={e => setTask(e.target.value)} />
                <div className='listTasks'>
                    {listTask.length ? listTask.map((value, index) => (<div key={index}>  {value} <button onClick={() => deleteTask(index)}> X </button> </div>)) : <span>No tasks, add a task</span>}

                </div>
            </div>

        </div>
    )
}

export default List;