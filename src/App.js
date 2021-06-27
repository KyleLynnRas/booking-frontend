import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
//components
import Login from "./pages/LoginPage";

function App() {
	const [userState, setUserState] = useState({
		user: null,
		token: null,
	});

	const URL = "https://bookin-api-kr.herokuapp.com/";

	//Initial token check, if none send home
	useEffect(() => {
		//retrieve info from local storage
		let localToken = window.localStorage.getItem("token");
		let localUser = window.localStorage.getItem("user");
		if (localToken) {
			console.log("found token");
			//set state with token/user info
			setUserState({ ...userState, token: localToken, user: localUser });
			//redirect to index page
		} else {
			alert("Please login");
			//redirect home
		}
	}, []);

	//set user from login
	const setUser = (loginToken, loginUser) => {
		// console.log("set");
		setUserState({ ...userState, token: loginToken, user: loginUser });
		//redirect to index page
	};

	return (
		<div className="App">
			<Login setUser={setUser} url={URL} />
		</div>
	);
}

export default App;
