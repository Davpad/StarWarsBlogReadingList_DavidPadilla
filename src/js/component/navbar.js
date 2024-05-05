import React, { Component , useContext,useEffect, useSyncExternalStore} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";




export const Navbar = () => {

	const {store, actions}= useContext(Context)



	let token = localStorage.getItem("token")
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">
				<Link to={"/"} className="navbar-brand"><i className="fa-solid fa-jedi fa-2x"></i></Link>
					<div className="d-flex">
						{token ?
							<div className="btn-group me-2">
								<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
									Favorites<span className="badge bg-secondary mx-1"></span>
								</button>
								<ul className="dropdown-menu dropdown-menu-lg-end">	
										{store.favorites.map((elem,indexCat)=> (
											(elem.map((item,index)=> (								
												<li key={index} className="d-flex justify-content-between text-primary">
													{item.name}
													<span className="text-danger fw-bold" onClick={()=>actions.deleteFavorite(indexCat,item.uid)}> X</span>
												</li>
											)))
										))}

								</ul>
							
							</div>

						:<Link to="/login" className="btn btn-primary me-auto">Login</Link>}

					</div>
			</div>
		</nav>
	);
};
