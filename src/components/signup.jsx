import React, { useState } from 'react'
import { signup } from '../context/auth';



const Signup = () => {


    const [userData, setuserData] = useState({ username: "", email: "", password: "",mobile:"" });
    // function handleChange(e,name){
    //     console.log(name)
    //     setuserData({...userData,:e.target.value});
    // }

    async function handleSubmit(e) {
       try {
        e.preventDefault();
        const data = await signup(userData);
        console.log(data)
        setuserData({ username: "", email: "", password: "",mobile:"" })
       } catch (error) {
        
       }
    }

    return (
        <div className='shadow-lg p-2 my-5'>
            <h1 className="mt-2 mb-5 display-1 d-flex justify-content-center row">
                Signup Details
            </h1>
            <div className="d-flex justify-content-center row">
                <input className='my-2' type="text" placeholder='UserName' style={{ width: "12rem" }} onChange={e => setuserData({ ...userData, username: e.target.value })} />
            </div>
            <div className="d-flex justify-content-center row">
                <input className='my-2' type="text" placeholder='Email' style={{ width: "12rem" }} onChange={e => setuserData({ ...userData, email: e.target.value })} />
            </div>
            <div className="d-flex justify-content-center row">
                <input type="text" name="Phone Number" pattern="[7-9]{1}[0-9]{9}"
                    title="Phone number with 7-9 and remaing 9 digit with 0-9"
                    style={{ width: "12rem" }}
                    placeholder="Phone No"
                    onChange={e => setuserData({ ...userData, mobile: e.target.value })}>
                </input>
            </div>
            <div className="d-flex justify-content-center row">
                <input className='my-2' type="password" placeholder='Password' style={{ width: "12rem" }} onChange={e => setuserData({ ...userData, password: e.target.value })} />
            </div>
            <div className="d-flex justify-content-center row my-2">
                <button type='submit' onClick={e=>handleSubmit(e)} className='col-1'>
                    Sign up
                </button>
            </div>
            <div className="row my-3">
                <a className='d-flex justify-content-center' href="/login">Have an account? Login</a>
            </div>
        </div>
    )
}

export default Signup