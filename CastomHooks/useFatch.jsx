
import React ,{useState ,useEffect} from 'react'

const useFatch = (url) => {

      const [data  ,setData] =useState()
      const [loading , isloading]= useState(true)
      const [error , seterror]= useState(null)
    
    useEffect(()=>{
       fetch(url)
       .then((res)=> {
            if(!res.ok){
              throw Error('api is not working')
              
            }else{
              return res.json()
            }
       })
       .then((data)=>{
        setData(data)
        isloading(false)
        seterror(null)
       
       }).catch((error)=>{
           seterror(error.message)
           isloading(false)
       })
      
    },[url])
  return  {data ,error,loading}
}

  export default useFatch