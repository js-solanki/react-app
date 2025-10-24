import './App.css';
import { useState } from 'react';

function App() {

  const [toDo, setToDo] = useState([{ id: 1, text: 'Practice Components', isComplete: true },
  { id: 2, text: 'Practice State', isComplete: false },
  { id: 3, text: 'Learn State', isComplete: false }])

  const [count, setCount] = useState(0);
  const [task] = useState('');

  const updateCount = function (decrement = false) {
    decrement ? (count > 0 && setCount(count - 1)) : setCount(count + 1);
  }
  const completedCount = function (isComplete = true) {
    let completedTask = toDo.filter((item) => item.isComplete === isComplete);
    return completedTask.length;
  }

  const addTaskInTodo = function () {
    console.log(task);
  }

  const removeTask = function (removeIdx) {
    console.log("remove index", removeIdx);
    let updatedToDo = toDo.filter((item, index) => index !== removeIdx);
    setToDo(updatedToDo);
  }
  return (

    <div>
     
      <div>
        <input type='text' name='task' placeholder='Task to add' />
        <button onClick={() => addTaskInTodo()}> add </button>
      </div>
      <h3>TO DO LIST :</h3>
      <ul>
        {toDo.map((item, index) => {
          return <div><div className={item.isComplete ? 'list-item completed-task' : 'list-item'} >{item.text}
           </div> <button class='remove-btn' onClick={() => removeTask(index)}> remove </button></div>
        })
        }
      </ul>

      <p>Completed Task: {completedCount(true)}</p>
      <p>Not Completed Task: {completedCount(false)}</p>

      <div className='count-div'>
        <h4> count is {count}</h4>
        <button onClick={() => updateCount()}>
          increment
        </button>
        <button onClick={() => updateCount(true)}>
          decrement
        </button>

      </div>

    </div>
  );
}

export default App;
