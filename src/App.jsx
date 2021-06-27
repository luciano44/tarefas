import './styles/app.scss';
import {useState} from 'react';
import {AiOutlineHome, AiOutlineCheck} from 'react-icons/ai'
import {IoCheckmarkDoneOutline} from 'react-icons/io5'
import {IoMdArrowDropdown} from 'react-icons/io'
import {BsQuestionCircleFill} from 'react-icons/bs'
import {RiTodoLine} from 'react-icons/ri'

import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Title from './components/Title'
import {v4 as uuidv4} from 'uuid';



function App() {
  const [tasks, setTasks] = useState([
    { 
      id: '1',
      title: 'Fazer exercicio',
      completed: false,
    },
    { 
      id: '2',
      title: 'Ler Livros',
      completed: true,
    },
    { 
      id: '3',
      title: 'Estudar sobre geologia',
      completed: false,
    }
  ])

  const handleTaskClick = (taskId) =>{
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return {...task, completed: !task.completed}
      
      return task;
  })
    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [{
      id: uuidv4(),
      title: taskTitle,
      completed: false,
    },...tasks]

    setTasks(newTasks)
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasks(newTasks)
  }

  
  function opendd(){
  var dd = document.querySelector('.dropdown');
    if(dd.classList.contains('is-active')){
      dd.classList.remove('is-active');
    }else{
      dd.classList.add('is-active');
    }
  }

  function listen(){

    document.addEventListener('scroll', () => {
      var dd = document.querySelector('.dropdown');
      dd.classList.remove('is-active');      
    })
  }
    
  listen();

    
  

  
  

  return (
    <div className="wrapper">
      <div className="header">
        <div className="imglogo">
          <a href="index.html">
          <img src="https://cdn4.iconfinder.com/data/icons/computer-and-web-2/500/Survey-512.png" alt="logo" />
          </a>
        </div>
        
        <ul className="menu-items">
          <li className="item">
            
            <a href="#"><AiOutlineCheck/><span>Todas tarefas</span></a></li>
          <li className="item">
            
            <a href="#"><IoCheckmarkDoneOutline/><span>Feitas</span></a></li>
          <li className="item">
            
            <a href="#"><RiTodoLine/><span>Para fazer</span></a></li>
          <li className="item">
            
            <a href="#"><BsQuestionCircleFill/><span>Sobre</span></a></li>
        </ul>

        {/* ---------------------- DROPDOWN -----------------*/}
      <div class="dropdown is-right">
        <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={opendd}>
            <span>Menu</span>
              <span class="btn-icon">
                <IoMdArrowDropdown/>
              </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a class="dropdown-item">
              <AiOutlineCheck/><span className="dd-item">Todas tarefas</span>
            </a>
            <a href="#" class="dropdown-item">
              <IoCheckmarkDoneOutline/><span className="dd-item">Feitas</span>
            </a>
            <a href="#" class="dropdown-item">
              <RiTodoLine/><span className="dd-item">Para fazer</span>
            </a>
            <a href="#" class="dropdown-item">
              <BsQuestionCircleFill/><span className="dd-item">Sobre</span>
            </a>
          </div>
        </div>
      </div>

      </div>
      <div className="container">
        <Title/>
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
      </div>
    </div>
  );
}

export default App;


