import React,{useState, useEffect} from 'react';
import useFatch from './useFatch';

const UseEffect = () => {

    const api = 'https://jsonplaceholder.typicode.com/users'
    const {data ,error,loading} =useFatch(api)
    console.log(data)

  return (
    <div>
      {
        error && <h1>{error}</h1>
      }
      {
        data && data.map((user)=>{
            console.log(user)
          return <div key={user.id}>
            <p>{user.id}</p>
            <h2>{user.name}</h2>
          </div>
        })
      }
      {
        loading && <h1> data is loading now</h1>
      }
      

    </div>
  )
}

export default UseEffect