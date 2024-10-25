import React, { useState } from 'react'

export const List = () => {
    const [task, setTask] = useState("")
    const [listTask, setListTask] = useState([])
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setListTask(
                [...listTask, task]
            );
        
            setTask("")
        }
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
                    {listTask.length ? listTask.map((value, index) => (<div className='individualTask' key={index}>  {value} <button className='deleteButton' onClick={() => setListTask(listTask => listTask.filter((task, i) => (i != index)))}> X </button> </div>)) : <span>No tasks, add a task</span>}

                </div>
                <div className='counter'>
                    {listTask.length} <span> item left </span>
                </div>
            </div>
            <div className='cotaninerboxsahdow'>
                <div className='boxafter1'></div>
                <div className='boxafter2'></div>
            </div>

        </div>
    )
}

export default List;