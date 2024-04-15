import React, {Component, useContext,useEffect} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";



export const DetailsPlanet = () => {

	const {store, actions}= useContext(Context)
    const params = useParams()
    console.log(params.id);
    useEffect(()=>{
		actions.getPlanet(params.id)
	},[]);
    console.log(store.planet);

	return (
		<>
		<div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-3">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h5 className="card-title">{store.planet?.properties?.name}</h5>
                        <p className="card-text">{store.planet.description}</p>
                    </div>
                </div>
            </div>
            <div className="row g-0">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Climate</th>
                        <th>Diameter</th>
                        <th>Gravity</th>
                        <th>Terrain</th>
                        <th>Population</th>
                    </tr>
                    <tr>
                        <th>{store.planet?.properties?.name}</th>
                        <th>{store.planet?.properties?.climate}</th>
                        <th>{store.planet?.properties?.diameter}</th>
                        <th>{store.planet?.properties?.gravity}</th>
                        <th>{store.planet?.properties?.terrain}</th>
                        <th>{store.planet?.properties?.population}</th>
                    </tr>
                </table>
            </div>
        </div>
		</>
	);

}