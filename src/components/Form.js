import React, { useState } from "react";

const Form = (props) => {
	const [formData, setFormData] = useState({
		category: "",
		rating: "",
		user_id: props.users.user,
		content: "",
		performance_id: props.id,
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		console.log(formData);
		e.preventDefault();
		//create new review
		props.create(formData);
	};

	return (
		<form onSubmit={handleSubmit}>
			<select name="category" value={formData.category} onChange={handleChange}>
				<option value="favorite">Favorite</option>
				<option value="review">Review</option>
			</select>
			<select name="rating" value={formData.rating} onChange={handleChange}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</select>
			<input
				type="text"
				name="content"
				value={formData.content}
				onChange={handleChange}
			/>
			<button type="submit" value="submit">
				Submit
			</button>
		</form>
	);
};

export default Form;
