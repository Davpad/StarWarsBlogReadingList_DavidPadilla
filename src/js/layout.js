import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { DetailsCharacter } from "./views/detailsCharacter";
import { DetailsPlanet } from "./views/detailsPlanet";
import { DetailsVehicle } from "./views/detailsVehicle";
import { Login } from "./views/login";
import { Signup } from "./views/signup";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/detailsCharacter/:id" element={<DetailsCharacter />} />
						<Route path="/detailsPlanet/:id" element={<DetailsPlanet />} />
						<Route path="/detailsVehicle/:id" element={<DetailsVehicle />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
