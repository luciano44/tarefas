import React, { useState } from 'react';
import '../styles/task.scss';
import { AiOutlineInfoCircle, AiOutlineDelete } from "react-icons/ai";

const Task = ({task, handleTaskClick, handleTaskDeletion}) => {
    console.clear()
    setTimeout(() => {
        console.log(task)
    }, 10);

    return(
        <div className="task-wrapper">
            <div onClick={() => {handleTaskClick(task.id)}} 
            className={task.completed ? 'taskNotCompleted' : 'taskCompleted'}>
            <p><span>Title</span>: {task.title}</p>
            </div>
                <div className="task-icon"
                    onClick={() => handleTaskDeletion(task.id)}>
                    <div className="icon">
                        <AiOutlineInfoCircle size="100%"/>
                    </div>
                </div>
                <div className="task-icon"
                    onClick={() => handleTaskDeletion(task.id)}>
                        <div className="icon">
                            <AiOutlineDelete size="100%"/>
                        </div>
                </div>
        </div>
    )

}

export default Task;