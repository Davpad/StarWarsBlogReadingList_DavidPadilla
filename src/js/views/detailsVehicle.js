import React, {Component, useContext,useEffect} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";



export const DetailsVehicle = () => {

	const {store, actions}= useContext(Context)
    const params = useParams()
    // console.log(params.id);
    useEffect(()=>{
		actions.getVehicle(params.id)
	},[]);
    // console.log(store.vehicle);

	return (
		<>
		<div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{store.vehicle?.properties?.name}</h5>
                    </div>
                </div>
            </div>
            <div className="row g-0">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Crew</th>
                        <th>Passengers</th>
                        <th>Cargo capacity</th>
                        <th>Manufacturer</th>
                    </tr>
                    <tr>
                        <th>{store.vehicle?.properties?.name}</th>
                        <th>{store.vehicle?.properties?.model}</th>
                        <th>{store.vehicle?.properties?.crew}</th>
                        <th>{store.vehicle?.properties?.passenger}</th>
                        <th>{store.vehicle?.properties?.cargo_capacity}</th>
                        <th>{store.vehicle?.properties?.manufacturer}</th>
                    </tr>
                </table>
            </div>
        </div>
		</>
	);

}