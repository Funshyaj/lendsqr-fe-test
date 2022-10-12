import './login.scss';
import logo from "./login page assets/logo.png";
import img from "./login page assets/login-img-pc.png"
import {Link} from "react-router-dom";
import { useState } from 'react';

 
const Login = () => {
    
const [showPassword, setShowPassword] = useState(false)


    return ( <div className='login-page'>
<div className='login-logo'>
<img src={logo} alt="Logo" />
</div>

<div className='side-image'>
    <img src={img} alt="illustration" />
</div>

       <div className="login-section">
        <div className='login-content'>
<div className="login-section-head-texts">
    <h1>Welcome!</h1>
    <p>Enter details to Login.</p>
</div>
<form action="">
    <div className="inputs">
<input type="Email" placeholder='Email'/>
<div className="password">
<input type={`${showPassword?"text":"password"}`} placeholder='Password'/>
<p onClick={()=> setShowPassword(!showPassword)}>{showPassword?"HIDE":"SHOW"}</p>
</div>
    </div>
<p href="#">FORGOT PASSWORD?</p>

<Link to="/Userpage" >
    <button type="submit">LOG IN</button>
</Link>
  

</form>
</div>
       </div>
    </div> );
}
 
export default Login;