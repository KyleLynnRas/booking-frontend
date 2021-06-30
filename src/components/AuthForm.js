//Bulma
import { Form, Button } from "react-bulma-components";

const AuthForm = (props) => {
	return (
		<form className="form-container" onSubmit={props.handleSubmit}>
			<Form.Field>
				<Form.Label className="form-text">Username</Form.Label>
				<Form.Control>
					<Form.Input
						type="text"
						name="username"
						value={props.formData.username}
						onChange={props.handleChange}
					/>
				</Form.Control>
			</Form.Field>
			<Form.Field>
				<Form.Label className="form-text">Password</Form.Label>
				<Form.Control>
					<Form.Input
						type="password"
						name="password"
						value={props.formData.password}
						onChange={props.handleChange}
					/>
				</Form.Control>
			</Form.Field>
			<Button type="submit" className="form-btn" value="submit">
				Submit
			</Button>
		</form>
	);
};

export default AuthForm;
