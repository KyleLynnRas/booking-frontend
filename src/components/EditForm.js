import React, { useState } from "react";
//Bulma
import { Form, Button } from "react-bulma-components";

const EditForm = (props) => {
	const [formData, setFormData] = useState(props.initialReview);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		// console.log(formData);
	};

	const handleSubmit = (e) => {
		// console.log(formData);
		e.preventDefault();
		//edit
		props.submitFunc(formData, props.id, props.revId);
	};

	//delete review
	const handleDelete = (e) => {
		//review id
		const revId = props.revId;
		//run func from app
		props.destroyReview(revId);
	};

	return (
		<form className={props.class} onSubmit={handleSubmit}>
			<Form.Field>
				<Form.Label className="form-text">Star Rating</Form.Label>
				<Form.Control>
					<Form.Select
						className="form-input"
						name="rating"
						value={formData.rating}
						onChange={handleChange}
					>
						<option value="0">-</option>
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
			<section className="edit-btn-box">
				<Button className="form-btn" onClick={handleDelete}>
					Delete
				</Button>
				<Button className="form-btn" type="submit" value="submit">
					Submit
				</Button>
			</section>
		</form>
	);
};

export default EditForm;
