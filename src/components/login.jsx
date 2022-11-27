import React,{useState} from 'react'
import { signin } from '../context/auth';


const Login = () => {

  const [userData, setuserData] = useState({email:"",password:""});
  
   async function handleSubmit(e){
     try {
      const data=await signin(userData);
      alert("loggedin")
     } catch (error) {
      
     }
    }

  return (
    <div className='shadow-lg p-2 my-5 '>
      <h1 className="mt-2 mb-5 display-1 d-flex justify-content-center row">
                Login
            </h1> 
        <div className="d-flex justify-content-center row">
                <input className='my-2' type="text" placeholder='Email' style={{ width: "12rem" }} onChange={e=>setuserData({...userData,email:e.target.value})} />
            </div>
            <div className="d-flex justify-content-center row">
                <input className='my-2' type="password" placeholder='Password' style={{ width: "12rem" }} onChange={e=>setuserData({...userData,username:e.target.value})} />
            </div>
        <div className="d-flex justify-content-center row my-2">
            <button onClick={e=>handleSubmit(e)} className='col-1'>
                LogIn
            </button>
        </div>
    </div>
  )
}

export default Login