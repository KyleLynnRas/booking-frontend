import React from "react";
import { useState } from "react";

const SignUp = (props) => {
	//add form state
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	//handleSubmit / get create func from app / need redirect to login
	const handleSubmit = (e) => {
		e.preventDefault();
		//create func app to pass form data
		create(formData);
	};

	//create user func
	const create = async (userData) => {
		try {
			const response = await fetch(props.url + "users", {
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userData),
			});
			const newUser = await response.json();
			console.log(newUser);
			//redirect
			props.history.push("/login");
		} catch (error) {
			alert(error);
		}
	};

	return (
		<section>
			<h1>SIGN UP</h1>
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

export default SignUp;
