import React from 'react';
import Task from './Task';
import '../styles/tasks.scss';

const Tasks = ({tasks, handleTaskClick, handleTaskDeletion}) => {
    return(
        <div className="tasks-container">
            {tasks.map( t => <Task task={t} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/> )}
        </div>
    )
}

export default Tasks;