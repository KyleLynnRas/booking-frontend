import React, { useState } from "react";
//Bulma
import { Form, Button } from "react-bulma-components";

const EditForm = (props) => {
	const [formData, setFormData] = useState({
		category: "review",
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
		//create/edit depending on submitFunc prop func sent
		props.submitFunc(formData, props.id, props.revId);
	};

	return (
		<form className="review-form-container" onSubmit={handleSubmit}>
			{/* <Form.Field>
				<Form.Label>Category</Form.Label>
				<Form.Control>
					<Form.Select
						name="category"
						value={formData.category}
						onChange={handleChange}
					>
						<option value="favorite">Favorite</option>
						<option value="review">Review</option>
					</Form.Select>
				</Form.Control>
			</Form.Field> */}
			<Form.Field>
				<Form.Label className="form-text">Star Rating</Form.Label>
				<Form.Control>
					<Form.Select
						className="form-input"
						name="rating"
						value={formData.rating}
						onChange={handleChange}
					>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</Form.Select>
				</Form.Control>
			</Form.Field>
			<Form.Field>
				<Form.Label className="form-text">
					Let us know how the event went
				</Form.Label>
				<Form.Control>
					<Form.Textarea
						className="form-input"
						type="text"
						name="content"
						value={formData.content}
						onChange={handleChange}
					/>
				</Form.Control>
			</Form.Field>
			<Button className="form-btn" type="submit" value="submit">
				Submit
			</Button>
		</form>
	);
};

export default EditForm;
