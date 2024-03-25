import React, { Component } from "react";

export const Card = (props) => (
    <div className="card col-4" key={props.id} >
    <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
);

