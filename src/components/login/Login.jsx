import React, {useState} from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const navigate=useNavigate();
    const handle=()=>{
        navigate('/')
    }
    const [password,setpassword]=useState("");
    const [email,setemail]=useState("");
 
    const handlepassword=(event)=>
    {
        setpassword(event.target.value);
    }
    const handleemail=(event)=>
    {
        setemail(event.target.value);
    }
    
    const handleSubmit=(event)=>
    {
       event.preventDefault();
       console.log(password,email)
    }
    return (
        <>
          <div className="App">
            <form method='POST' onSubmit={handleSubmit} className="login-form">
                <h2>Login</h2>
                <div className="input__fields">
                    <label htmlFor="email">Email Id:</label>
                    <input type="email" name="email" id="email" onChange={handleemail}required />
                </div>
                <div className="input__fields">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={handlepassword}required minLength={8} maxLength={15} />
                </div>
                <p>Forget password?</p>
                <button onClick={handle}type="submit">Log in</button>
            </form>
          </div>
        </>
    )
}

export default Login;