
//create a new Todo component which takes a parameter, then grabs the todo props from the App comp
const Todo = ({ todo }) => {
    return (
        //renders the todo item name into an h2
        <div>
            <h2>{todo.item}</h2>
        </div>
    )
}

//exporting the function to use elsewhere
export default Todo

