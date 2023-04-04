import {useState} from 'react'
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

function App() {
  const [todos, setTodos] = useState([])

const addTask = () => {

}

const removeTask = () => {

}

const handleToggle = () => {

}

  return (
    <div className="App">
      <header>
        <h1>Список задач {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask}/>
      {todos.map((todo) => {
        return (
        <ToDo 
          todo={todo}
          key={todo.id}
          toogleTask={handleToggle}
          removeTask={removeTask}
        />
        )
      }) }
    </div>
  );
}

export default App;
