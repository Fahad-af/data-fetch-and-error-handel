import React,{useState} from 'react'
import Input from './Input';
import Todos from './Todos';

const Home = () => {
    const todos = ['todos1','todos2'];
    const [todo,settodo]=useState(todos)
    const data1 =(e)=>{
        settodo([...todo,e])
    }
  return (
    <div>
      <Input data={data1} />
      {
        todo.map((todo,index)=>{
          return < div key={Math.random
          ()}>
          <Todos todo={todo}  key={index}/>
          </div>
        })
      }
    </div>
  )
}

export default Home