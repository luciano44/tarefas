import '../styles/addtask.scss'
import Button from './Button';
import React, { useState } from 'react';

const AddTask = ({handleTaskAddition}) => {

    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        if(inputData.trim().length < 5){
            alert('Insira um título mais descritivo')
        }else{
            handleTaskAddition(inputData)
            setInputData('')  
        }
    }

    return ( 
        <div className='addTask-wrapper'>
            <input 
            onKeyDown={() => {}}
            className='titleInput'
            onChange={handleInputChange} 
            type="text"
            value={inputData}
            />
            <Button onClick={handleAddTaskClick}>
                Adicionar
            </Button>
        </div>  
       
     );
}
 
export default AddTask;