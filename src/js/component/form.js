import React, { Component } from "react";


export const Form = (props) => (
  <form>
  <div className="mb-3">
    <label for="exampleInputEmail" className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail" placeholder="Enter email" onChange={e => setEmail(e.target.value)} value={Email} />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} value={Password} />
  </div>
    <div>
        <button type="submit" className="btn btn-primary">Login</button>
    </div>
  </form>
);