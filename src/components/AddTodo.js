//importing usestate hook from react
import { useState } from 'react'

//creating AddTodo component which takes one param, directly accessing the onAdd event from the top level as param
const AddTodo = ({ onAdd }) => { 
    //create two state variables using destructuring for useState hook
    const [item, setItem] = useState('')

    //create a handler function for our onSubmit event in the form element
    const onSubmit = (e) => {
        //prevents the default refresh
        e.preventDefault()
        //calling the onAdd handler function and passing the item as an object
        onAdd({item})

        //resetting the item state back to empty
        setItem('')
    }

    return (
        //adding onSubmit event
        <form onSubmit={onSubmit}>
            <label>Add Todo:</label>
            <input 
                type="text" 
                placeholder="Todo Item"
                value={item}
                onChange={ (e) => setItem(e.target.value)}
            /> 
            <input type="submit" value="Add Todo" />
        </form>
    )
}

export default AddTodo
