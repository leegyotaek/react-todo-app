import './App.css';
import React, {useState} from 'react';
import {Button, FormControl,Input, InputLabel} from '@material-ui/core'         
import Todo from './components/Todo';
import db from './firebase';

function App() {

  const [todos , setTodos] = useState([]);
  const [input, setInput] = useState('');

  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  // useEffect(()=>{
  //   // this code here... fires when the app.js loads
  //   db.collection('todos').onSnapshot(snapshot => {
  //     setTodos(snapshot.docs.map(doc => doc.data().todo))
  //   })
  // }, [])
  // useEffect(() => {
  //   }, [input])


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

      
      {/* <input value={input} onChange={event => setInput(event.target.value)}/> */}

      <FormControl>
        <InputLabel>✅Write a Todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}></Input>
      </FormControl>

        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
      Add Todo
      </Button>

      {/* <button type="submit" onClick={addTodo}>Add Todo</button>   */}
      
      </form>
      <ul>
        {todos.map(todo => (
           //<li>{todo}</li>
           <Todo text={todo}/> 
        ))}
      </ul>

    </div>
  );
}

export default App;

