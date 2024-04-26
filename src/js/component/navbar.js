import React, { Component , useContext,useEffect, useSyncExternalStore} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";




export const Navbar = () => {

	const {store, actions}= useContext(Context)

	const arrFavorites = store.favorites.map((name,index)=> <li key={index} className="justify-content-left">{name}<span className="text-danger fw-bold" onClick={()=>actions.deleteFavorite(name)}> X</span></li>)

	// function deleteFavorite(index){
	// 	const filteredFavorites = store.favorites.filter((i) => i !== index);
		
	// }

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">
				<Link to={"/"} className="navbar-brand"><i className="fa-solid fa-jedi fa-2x"></i></Link>
				<div className="d-flex">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 btn btn-primary">
						<li className="nav-item dropdown">
          					<a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            					Favorites
          					</a>
          					<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
							{arrFavorites}
          					</ul>
        				</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
