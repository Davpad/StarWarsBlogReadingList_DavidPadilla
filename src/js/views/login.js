import React, { useState , useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";



export const Login = () => {
    const {store, actions}= useContext(Context)
 
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")

    
    const navigate = useNavigate()

    function handleSubmit() {
        actions.login(email, password);
        // navigate("/");
    }
    
    return(
    
   <>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label for="exampleInputEmail" className="form-label">Email</label>
        <input type="email" className="form-control" id="exampleInputEmail" placeholder="Enter email" onChange={e => setEmail(e.target.value)} value={email} />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} />
      </div>
        <div>
            <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
    </>

);}