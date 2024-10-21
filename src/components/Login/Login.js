import React, { useState } from "react";
import '../Login/Login.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Success") { 
                    alert("Successfully! Logged in");
                    navigate('/landPage');
                } else {
                    alert("Invalid credentials. Please try again.");
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="login-container"> 
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <br/>
                <p>Don't have an account? <Link to="/Signup">Click to register.</Link></p>
                <br/>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default Login;
