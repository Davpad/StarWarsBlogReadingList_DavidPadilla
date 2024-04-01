import React, {Component, useContext,useEffect} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CardCharacter } from "../component/cardCharacter";
import { CardPlanet } from "../component/cardPlanet";

import { Link } from "react-router-dom";



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
					<CardCharacter name = {character.name} key ={character.uid} id={character.uid} />
				)
			})}
		</div>
		<div className="scrolling-wrapper">
			{store.planets.map((planet) =>{
				return (
					<CardPlanet name = {planet.name} key ={planet.uid} id={planet.uid}/>
				)
			})}
		</div>
		<div className="scrolling-wrapper">
			{store.vehicles.map((vehicle) =>{
				return (
					<CardCharacter name = {vehicle.name} key ={vehicle.uid} />
				)
			})}
		</div>
		</>
	);

}