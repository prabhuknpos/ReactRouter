import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth";

function Login() {
  const [user, setUser] = useState("");
  const [errorUsername, setErrorUsername] = useState(null);
  const [password,setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(null);

  
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  const redirectPath = location.state?.path || "/";
  

  const handleLogin = () => {
    let cusername,cpassword;
    //user name validation
    const userRegex = /^[a-zA-Z0-9]{5,}$/;
    if (user == null) {
      setErrorUsername('Username is Required!!');
    } else if (!userRegex.test(user)) {
      setErrorUsername('Please Enter 6 or more Chars !!!');
    } else {
      setErrorUsername("");
      cusername = true;
    }
    //user name validation
    const passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (password == null) {
      setErrorPassword('Username is Required!!');
    } else if (!passRegex.test(password)) {
      setErrorPassword('Please Enter 6 or more Chars !!!');
    } else {
      setErrorPassword("");
      cpassword = true;
    }
    if(cusername && cpassword)
    { 
    auth.login(user);
    navigate(redirectPath, { replace: true });
  }
  };
  return (
    <div>
      <label>
        Username:
        <input type="text" name="user" value={user} onChange={(e) => setUser(e.target.value)}></input>
        {errorUsername && (<p style={{color:'red'}}>{errorUsername}</p>)}
      </label>
      <label>
        Password:
        <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        {errorPassword && (<p style={{color:'red'}}>{errorPassword}</p>)}
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
