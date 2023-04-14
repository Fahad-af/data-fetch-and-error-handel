import React,{useEffect,useState} from 'react'

const DataFatch = () => {

      const [data ,setData]= useState(null);
      const [load, isload]=useState(true)
      const [error,setError]=useState(null)

      useEffect(()=>{
        fetch('https://jsonplaceholder3.typicode.com/users')
        .then((res)=> {
          if(!res.ok){
            throw Error('api is not working')
          }else{
            return res.json()
          }
        }).then((data)=>{
            setData(data)
            isload(false)
            setError(false)
        }).catch((error)=>{
            setError(error.message)
            isload(false)
        })
      },[])

  return (
    <div>
         {
            data && data.map((data)=>{
               return <div>
                  <h2>{data.id}</h2>
                  <h3>{data.name}</h3>
               </div>
            })
         }
         {
            load && <h1>data loading</h1>
         }
         {
            error && <h1>data not found</h1>
         }
    </div>
  )
}

export default DataFatch