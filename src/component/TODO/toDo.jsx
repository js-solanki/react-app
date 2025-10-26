
import { useContext, useState } from 'react';
import AddTask from './addTask';
import TaskList from './taskList';
import { AppContext } from '../../AppContext';

function ToDo() {
  const [toDo, setToDo] = useState([
    { id: 1, text: 'Practice Components', isComplete: true },
    { id: 2, text: 'Practice State', isComplete: false },
    { id: 3, text: 'Learn State', isComplete: false }
  ])

  const { setLoading } = useContext(AppContext);
  const [task, setTask] = useState('');

  const completedCount = function (isComplete = true) {
    let completedTask = toDo.filter((item) => item.isComplete === isComplete);
    return completedTask.length;
  }

  const addTaskInTodo = () => {
    if (!task.length) {
      alert("enter task ");
    } else {
      setLoading(true);
      setTimeout(() => {
        let data = { id: toDo.length + 1, text: task, isComplete: false };
        setToDo([...toDo, data]);
        setTask('');
        setLoading(false);
      }, 1000);

    }
  }


  const removeTask = function (removeIdx) {
    setToDo(toDo.filter((item, index) => index !== removeIdx));
  }
  return (

    <div className='container'>
      <div className='row'>
        <div className='col-4'>
          <AddTask task={task} setTask={setTask} addTaskInTodo={addTaskInTodo} />
        </div>
        <div className='col-8'>
          <h3>TO DO LIST :</h3>
          <div className="row">
            <div className='col-6'>Completed Task: {completedCount(true)}</div>
            <div className='col-6'>Not Completed Task: {completedCount(false)}</div>
          </div>
          <ul className="list-group">
            {toDo.map((item, index) => {
              return <TaskList key={index} item={item} index={index} removeTask={removeTask} />
            })
            }
          </ul>
          {!toDo.length && <div className="alert alert-primary" role="alert">
            To do list is empty
          </div>

          }

        </div>
      </div>


    </div>
  );
}

export default ToDo;