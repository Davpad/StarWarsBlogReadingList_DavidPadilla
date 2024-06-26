import React, { Component , useContext,useEffect} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const CardPlanet = (props) => {
    
    const {store, actions}= useContext(Context)

    return(
    <div className="card col-2" key={props.id} >
    <img src={`https://starwars-visualguide.com/assets/img/planets/${props.id}.jpg`} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text"></p>
            <div className="d-flex justify-content-between">            
                <Link to={"/detailsPlanet/"+props.id} className="btn btn-primary">Learn more</Link>
                <span><i className="far fa-heart" onClick={()=>actions.addFavorite(props.name)}></i></span>
            </div>

        </div>
    </div>
)};

