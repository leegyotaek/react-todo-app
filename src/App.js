import './App.css';
import React, {useState} from 'react';

function App() {

  const [todos , setTodos] = useState(['Take dogs for a walk', 'Take the rubbish out', 'Drink enough water']);
  const [input, setInput] = useState('');

  console.log('🔫)', input)

  const addTodo = (event=> {

    event.preventDefault();
    console.log('👻', 'Im working');

    setTodos([...todos, input])
    setInput(''); // clear up the input after clicking add todo button

  })

  return (
    <div className="App">
      <h1>Hello World! 🚀🚀🚀</h1>

      <form>

      
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button type="submit" onClick={addTodo}>Add Todo</button>  
      
      </form>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;

