import React,{useState, useEffect} from 'react';

const UseEffect = () => {
    const [user ,setuser] =useState()
    const [loading , isloading]= useState(true)
    const [error , seterror]= useState(null)
    
    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/users')
       .then((res)=> {
            if(!res.ok){
              throw Error('api is not working')
              
            }else{
              return res.json()
            }
       })
       .then((data)=>{
        setuser(data)
        isloading(false)
        seterror(null)
       
       }).catch((error)=>{
           seterror(error.message)
           isloading(false)
       })
      
    },[])
  return (
    <div>
      {
        error && <h1>{error}</h1>
      }
      {
        user && user.map((user)=>{
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