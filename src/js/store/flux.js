const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			planets: [],
			vehicles: [],
			character:[],
			planet:[],
			vehicle:[],
			favorites:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			getAllCharacters:() => {
				fetch ('https://www.swapi.tech/api/people/', {
					method: "GET",
				})
				.then((response)=> {
		
					return response.json()
				})
				.then((data)=>{
					setStore({characters:data.results});
					console.log(data.results);
				})
				.catch((error)=>{
					console.log(error)}
				)

			},

			getAllPlanets:() => {
				fetch ('https://www.swapi.tech/api/planets/', {
					method: "GET",
				})
				.then((response)=> {
		
					return response.json()
				})
				.then((data)=>{
					setStore({planets:data.results});
					console.log(data.results);
				})
				.catch((error)=>{
					console.log(error)}
				)

			},

			getAllVehicles:() => {
				fetch ('https://www.swapi.tech/api/vehicles/', {
					method: "GET",
				})
				.then((response)=> {
		
					return response.json()
				})
				.then((data)=>{
					setStore({vehicles:data.results});
					console.log(data.results);
				})
				.catch((error)=>{
					console.log(error)}
				)

			},

			getCharacter:(id) => {
				fetch ("https://www.swapi.tech/api/people/"+id, {
					method: "GET",
				})
				.then((response)=> {
					return response.json()
				})
				.then((data)=>{
					setStore({character:data.result});
					console.log(data.result);
				})
				.catch((error)=>{
					console.log(error)}
				)

			},

			getPlanet:(id) => {
				fetch ("https://www.swapi.tech/api/planets/"+id, {
					method: "GET",
				})
				.then((response)=> {
					return response.json()
				})
				.then((data)=>{
					setStore({planet:data.result});
					// console.log(data.result);
				})
				.catch((error)=>{
					console.log(error)}
				)

			},

			getVehicle:(id) => {
				fetch ("https://www.swapi.tech/api/vehicles/"+id, {
					method: "GET",
				})
				.then((response)=> {
					return response.json()
				})
				.then((data)=>{
					setStore({vehicle:data.result});
					// console.log(data.result);
				})
				.catch((error)=>{
					console.log(error)}
				)

			},

			addFavorite:(name)=> {
				setStore({favorites:getStore().favorites.concat(name)})
				console.log(getStore().favorites);
			},

			deleteFavorite:(index)=>{
				const filteredFavorites = getStore().favorites.filter((i) => i !== index);
				setStore({favorites: filteredFavorites});
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
