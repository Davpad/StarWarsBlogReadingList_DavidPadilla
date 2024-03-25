import React, {Component, useContext,useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card";


export const Home = () => {

	const {store, actions}= useContext(Context)

    useEffect(()=>{
		actions.getAllCharacters()
		actions.getAllPlanets()
		actions.getAllVehicles()


	},[]);

	// console.log(store.characters);

	return (
		<>
		<div className="scrolling-wrapper">
			{store.characters.map((character) =>{
				return (
					<Card name = {character.name} key ={character.uid} />
				)
			})}
		</div>
		<div className="scrolling-wrapper">
			{store.planets.map((planet) =>{
				return (
					<Card name = {planet.name} key ={planet.uid} />
				)
			})}
		</div>
		<div className="scrolling-wrapper">
			{store.vehicles.map((vehicle) =>{
				return (
					<Card name = {vehicle.name} key ={vehicle.uid} />
				)
			})}
		</div>
		</>
	);

}