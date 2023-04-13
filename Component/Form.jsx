import React ,{useState}from 'react'

function Form() {
      // const [ name, setName] = useState('')
      // const [ email, setEmail] = useState('')
      // const [ password , setPassword] = useState('')
      const [user,setUser] = useState({name:'',password:'',email:''})
      const {name,email,password}=user
      // const onName = (e)=>{
      //      setName(e.target.value)
      // }
      // const onEmail = (e)=>{
      //      setEmail(e.target.value)
      //  }
      //  const onPassword = (e)=>{
      //     setPassword(e.target.value)
      //  }
      const onChange =(e)=>{
            setUser({...user,[e.target.name]:e.target.value})
      }
      const submit =(e)=>{
            const userinfo ={
                  name:name,
                  password:password,
                  email:email
            }
            console.log(userinfo)
            // console.log(name,password,email)
            e.preventDefault()
      }
  return (
    <div>
      <form action="" onSubmit={submit}>
            <legend> please fill up this form</legend>
            <label htmlFor="name">Name:</label>
            <input type="text" id='name' onChange={onChange} name='name' value={name} /> <br /> <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id='email' onChange={onChange} value={email} name='email' /> <br /> <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id='password' onChange={onChange} name='password' value={password} /> <br /> <br />
             <input type="submit" />
      </form>
    </div>
  )
}

export default Form