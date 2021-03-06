import "./styles.scss";
import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import Index from "./pages/performances/Index";
import SignUp from "./pages/SignUp";
import Show from "./pages/performances/Show";
import Edit from "./pages/reviews/Edit";
import UserShow from "./pages/UserShow";

function App(props) {
	const [userState, setUserState] = useState({
		user: null,
		token: null,
	});

	const [reviews, setReviews] = useState(null);

	const [performances, setPerformances] = useState(null);

	const URL = "https://bookin-api-kr.herokuapp.com/";

	//Initial token check, if none send home
	useEffect(() => {
		if (window.localStorage.getItem("token")) {
			// console.log("found token");
			//retrieve info from local storage
			let localToken = window.localStorage.getItem("token");
			let localUser = window.localStorage.getItem("user");
			//set state with token/user info
			setUserState({ ...userState, token: localToken, user: localUser });
			//get initial data
			getPerformances(localToken);
			getReviews(localToken);
		} else {
			alert("please log in");
		}
		//run again when change in token
	}, [userState.token]);

	//set user from login
	const setUser = (loginToken, loginUser) => {
		setUserState({ ...userState, token: loginToken, user: loginUser });
	};

	//get performance data
	const getPerformances = async (localToken) => {
		try {
			const response = await fetch(URL + "performances", {
				headers: {
					Authorization: `Bearer ${localToken}`,
				},
			});
			const data = await response.json();
			setPerformances(data);
		} catch (error) {
			console.log(error);
		}
	};

	//get review data
	const getReviews = async (token) => {
		try {
			const response = await fetch(URL + "reviews", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			const data = await response.json();
			setReviews(data);
		} catch (error) {
			console.log(error);
		}
	};

	//create new review
	const createReview = async (formData) => {
		try {
			await fetch(URL + "reviews", {
				method: "post",
				headers: {
					Authorization: `Bearer ${userState.token}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			//update reviews
			getReviews(userState.token);
		} catch (error) {
			console.log(error);
		}
	};

	//update review info
	const updateReview = async (formData, perfId, revId) => {
		try {
			await fetch(URL + `reviews/${revId}`, {
				method: "put",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${userState.token}`,
				},
				body: JSON.stringify(formData),
			});
			//update reviews
			getReviews(userState.token);
			props.history.push(`/performances/${perfId}`);
		} catch (error) {
			console.log(error);
		}
	};

	//destroy review info
	const destroyReview = async (revId) => {
		try {
			await fetch(URL + `reviews/${revId}`, {
				method: "delete",
				headers: {
					Authorization: `Bearer ${userState.token}`,
				},
			});
			//update reviews
			getReviews(userState.token);
		} catch (error) {
			console.log(error);
		}
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
					render={(routerProps) => (
						<Index
							{...routerProps}
							performances={performances}
							user={userState}
						/>
					)}
				/>
				<Route
					path="/performances/:id"
					render={(routerProps) => (
						<Show
							{...routerProps}
							users={userState}
							performances={performances}
							reviews={reviews}
							create={createReview}
						/>
					)}
				/>
				<Route
					path="/reviews/:id/edit"
					render={(routerProps) => (
						<Edit
							{...routerProps}
							users={userState}
							reviews={reviews}
							updateReview={updateReview}
							destroyReview={destroyReview}
						/>
					)}
				/>
				<Route
					exact
					path="/mypage"
					render={(routerProps) => (
						<UserShow {...routerProps} reviews={reviews} users={userState} />
					)}
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
