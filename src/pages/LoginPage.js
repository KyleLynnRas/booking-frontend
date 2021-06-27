import React from "react";
import { useState } from "react";

const LoginPage = ({ url, setUser }) => {
	//form state
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	//sending form data to backend for auth/token
	const login = async (formData) => {
		const response = await fetch(url + "login", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});
		//parse response data
		const currentUser = await response.json();
		let loginToken = JSON.stringify(currentUser.token);
		let loginUser = JSON.stringify(currentUser.user.id);
		//save to local storage
		window.localStorage.setItem("token", loginToken);
		window.localStorage.setItem("user", loginUser);
		//pass to change state in app
		setUser(loginToken, loginUser);
	};

	//handleChange
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	//handleSubmit
	const handleSubmit = (e) => {
		e.preventDefault();
		//run login func with formData
		// console.log(formData)
		login(formData);
	};

	return (
		<section>
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
