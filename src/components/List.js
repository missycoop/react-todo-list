//importing Todo component
import Todo from './Todo'

//creating a list component which takes one parameter, which is the todos array that is being passed from the App comp
const List = ({ todos }) => {
    return (
      //map through the todos array and renders a Todo component for each todo item
        <div>
          {todos.map((todo) => 
            <Todo key={todo.id} todo={todo} />
          )}  
        </div>
    )
}

export default List

