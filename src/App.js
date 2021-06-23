//importing usestate hook from react
import { useState } from 'react'
//importing all the child components from the components folder
import Header from "./components/Header";
import List from "./components/List"
import AddTodo from "./components/AddTodo"

//creating a function App component
function App() {


  //use destructing to add variables and reference them to usestate hook, with this
  //todos hold the currentState of the app and setTodos helps us change it
  //then add an array of objects that has all the hardcoded todoItems to display on the list
  const [todos, setTodos] = useState([
    {
      id: 1,
      item: "Drink Water",
    },
    {
      id: 2,
      item: "Make Healthy Dinner",
    },
    {
      id: 3,
      item: "Exercise",
    },
  ]);

  //this is a handler function that is associated to the onAdd event handler
  const addTodo = (todo) => {
    //the id variable holds the value of random numbers between 0 to 100000
    const id = Math.ceil(Math.random()*100000)
    //then associate the id and the todo array to the newTodo variable
    const newTodo = {id, ...todo}
    //then pass both the old and new todos into the state
    setTodos([...todos, newTodo])
  }

//returning a div, with all the child components
//addTodo gets the props on onAdd event with a handler function associated to it
//list gets the props of todos Array
  return (
    <div className="container">
      <Header title="Todo List" />
      <AddTodo onAdd={addTodo} />
      <List todos={todos}/>
    </div>
  );
}

export default App;
