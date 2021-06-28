import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import Index from "./pages/performances/Index";
import SignUp from "./pages/SignUp";
import Show from "./pages/performances/Show";
import New from "./pages/reviews/New";
import Edit from "./pages/reviews/Edit";

function App(props) {
	const [userState, setUserState] = useState({
		user: null,
		token: null,
	});

	const URL = "https://bookin-api-kr.herokuapp.com/";

	//Initial token check, if none send home
	useEffect(() => {
		if (window.localStorage.getItem("token")) {
			console.log("found token");
			//retrieve info from local storage
			let localToken = window.localStorage.getItem("token");
			let localUser = window.localStorage.getItem("user");
			//set state with token/user info
			setUserState({ ...userState, token: localToken, user: localUser });
		} else {
			alert("please log in");
		}
	}, []);

	//set user from login
	const setUser = (loginToken, loginUser) => {
		setUserState({ ...userState, token: loginToken, user: loginUser });
	};

	return (
		<div className="App">
			<Switch>
				<Route
					exact
					path="/"
					render={(routerProps) => <Home {...routerProps} user={userState} />}
				/>
				<Route
					exact
					path="/performances"
					render={(routerProps) => <Index {...routerProps} />}
				/>
				<Route
					path="/performances/:id"
					render={(routerProps) => <Show {...routerProps} />}
				/>
				<Route
					path="/reviews/new"
					render={(routerProps) => <New {...routerProps} />}
				/>
				<Route
					path="/reviews/:id/edit"
					render={(routerProps) => <Edit {...routerProps} />}
				/>
				<Route
					path="/login"
					render={(routerProps) => (
						<Login {...routerProps} setUser={setUser} url={URL} />
					)}
				/>
				<Route
					path="/signup"
					render={(routerProps) => <SignUp {...routerProps} url={URL} />}
				/>
			</Switch>
		</div>
	);
}

export default App;
