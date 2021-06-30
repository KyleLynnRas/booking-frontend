import React from "react";
import { useState } from "react";
import AuthForm from "../components/AuthForm";
import Nav from "../components/Nav";

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
		<div className="main-signup-container">
			<Nav />
			<section className="signup-content-container">
				<h1>Sign up</h1>
				<AuthForm
					handleSubmit={handleSubmit}
					handleChange={handleChange}
					formData={formData}
				/>
			</section>
		</div>
	);
};

export default SignUp;
