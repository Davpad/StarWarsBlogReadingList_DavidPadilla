import React, {Component, useContext,useEffect} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CardCharacter } from "../component/cardCharacter";
import { CardPlanet } from "../component/cardPlanet";
import { CardVehicle } from "../component/cardVehicle";
import { Link } from "react-router-dom";



export const Home = () => {

	const {store, actions}= useContext(Context)

    useEffect(()=>{
		actions.getAllCharacters()
		actions.getAllPlanets()
		actions.getAllVehicles()
		actions.getFavorites()


	},[]);

	// console.log(store.characters);

	return (
		<>
		<h1>Characters</h1>
		<div className="scrolling-wrapper">
			{store.characters.map((character) =>{
				return (
					<CardCharacter name = {character.name} key ={character.uid} id={character.uid} />
				)
			})}
		</div>
		<h1>Planets</h1>
		<div className="scrolling-wrapper">
			{store.planets.map((planet) =>{
				return (
					<CardPlanet name = {planet.name} key ={planet.uid} id={planet.uid}/>
				)
			})}
		</div>
		<h1>Vehicles</h1>
		<div className="scrolling-wrapper">
			{store.vehicles.map((vehicle) =>{
				return (
					<CardVehicle name = {vehicle.name} key ={vehicle.uid} id={vehicle.uid} />
				)
			})}
		</div>
		</>
	);

}