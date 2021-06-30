import React from "react";
import { useState } from "react";
//Bulma
import { Form, Button } from "react-bulma-components";

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
			<section className="signup-content-container">
				<h1>Sign up</h1>
				<form className="form-container" onSubmit={handleSubmit}>
					<Form.Field>
						<Form.Label className="form-text">Username</Form.Label>
						<Form.Control>
							<Form.Input
								type="text"
								name="username"
								value={formData.username}
								onChange={handleChange}
							/>
						</Form.Control>
					</Form.Field>
					<Form.Field>
						<Form.Label className="form-text">Password</Form.Label>
						<Form.Control>
							<Form.Input
								type="password"
								name="password"
								value={formData.password}
								onChange={handleChange}
							/>
						</Form.Control>
					</Form.Field>
					<Button type="submit" className="form-btn" value="submit">
						Submit
					</Button>
				</form>
			</section>
		</div>
	);
};

export default SignUp;
