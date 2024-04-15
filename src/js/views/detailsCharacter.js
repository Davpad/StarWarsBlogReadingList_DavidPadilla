import React, {Component, useContext,useEffect} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";



export const DetailsCharacter = () => {

	const {store, actions}= useContext(Context)
    const params = useParams()
    console.log(params.id);
    useEffect(()=>{
		actions.getCharacter(params.id)
	},[]);
    // const properties = store.character.properties
    console.log(store.character);

	return (
		<>
		<div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-3">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h5 className="card-title">{store.character?.properties?.name}</h5>
                        <p className="card-text">{store.character?.description}</p>
                    </div>
                </div>
            </div>
            <div className="row g-0">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Birth year</th>
                        <th>Gender</th>
                        <th>Height</th>
                        <th>Skin color</th>
                        <th>Eye color</th>
                    </tr>
                    <tr>
                        <th>{store.character?.properties?.name}</th>
                        <th>{store.character?.properties?.birth_year}</th>
                        <th>{store.character?.properties?.gender}</th>
                        <th>{store.character?.properties?.height}</th>
                        <th>{store.character?.properties?.skin_color}</th>
                        <th>{store.character?.properties?.eye_color}</th>
                    </tr>
                </table>
            </div>
        </div>
		</>
	);

}