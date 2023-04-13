import React ,{ useState} from 'react'

const Input = (props) => {
      const [todo,settodo] = useState('')
      const todoChange = (e) => {
            settodo(e.target.value)
      }
      const onSubmit =(e)=>{

            e.preventDefault()
           
            props.data(todo)
           settodo('')

      }
  return (
    <div> 
         <form onSubmit={onSubmit}>
            <label htmlFor="todo">todo:</label>
            <input 
            type="text"
            id='todo'
            value={todo}
            required
            name='todo'
            onChange={todoChange}
            
            />
            <input type="submit" />
         </form>
    </div>
  )
}

export default Input