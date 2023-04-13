import React from 'react'

const Todos = (props) => {
  return (
    <div>
    <h1 style={{textAlign:'center'}}>{props.todo}</h1>
    </div>
  )
}

export default Todos