import React from "react";
import { useState } from "react";

const LoginPage = (props) => {
	//form state
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	//sending form data to backend for auth/token
	const login = async (formData) => {
		try {
			const response = await fetch(props.url + "login", {
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			//parse response data
			const currentUser = await response.json();

			//alert if login unsucessful
			if (currentUser.error) {
				//clear form
				setFormData({ username: "", password: "" });
				alert(currentUser.error);
			} else {
				let loginToken = currentUser.token;
				// let loginToken = JSON.stringify(currentUser.token);
				let loginUser = JSON.stringify(currentUser.user.id);
				//save to local storage
				window.localStorage.setItem("token", loginToken);
				window.localStorage.setItem("user", loginUser);
				//pass to change state in app
				props.setUser(loginToken, loginUser);
				//redirect to performance index
				props.history.push("/performances");
			}
		} catch (error) {
			alert(error);
		}
	};

	//handleChange
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	//handleSubmit
	const handleSubmit = (e) => {
		e.preventDefault();
		//run login func with formData
		login(formData);
	};

	return (
		<section>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<h1>Username</h1>
				<input
					type="text"
					name="username"
					value={formData.username}
					onChange={handleChange}
				/>
				<h1>Password</h1>
				<input
					type="password"
					name="password"
					value={formData.password}
					onChange={handleChange}
				/>
				<button type="submit" value="submit">
					Submit
				</button>
			</form>
		</section>
	);
};

export default LoginPage;
