import React, { useState } from "react";
import axios from "axios";
import Loader from "../components/Load";
import Error from "../components/Error";

function LoginPage() {
    
    const[email ,setEmail] = useState("");
    const[password ,setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

   async function Login() {
       
        const user = {
            email,
            password
        }
        try {
            setLoading(true);
            const result = (await axios.post("/api/users/login", user)).data
            setLoading(false);

            localStorage.setItem("currentUser" , JSON.stringify(result));
            window.location.href="/"

        } catch (error) {
            console.log(error);
            setLoading(false);
            setError(true);
        }
       
    }

    return(
        <div className="header">
            <div className="glass">
            {loading && (<Loader/>)}

                {error && (<Error message="Invalid"/>)}
            <center><h1 className="custcolor">Login</h1></center>

            <input type="text" placeholder="email" className="form"
            value={email} onChange={(e)=>{setEmail(e.target.value)}}  /><br/>

            <input type="password" placeholder="password" className="form"
            value={password} onChange={(e)=>{setPassword(e.target.value)}}  /><br/>

            <button className="mt-5 btn btn-outline-warning" onClick={Login}>Login</button>
            <br/> <br/>
            <a className="click-lo-ri" href="/register">Click here to Register</a> 
            
        </div>
        </div>
    )
}

export default LoginPage;