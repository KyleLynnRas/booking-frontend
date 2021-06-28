import { Link } from "react-router-dom";

const Home = ({ user }) => {
	console.log(user);
	return (
		<section>
			{user.token ? <h1>WELCOME BACK!</h1> : <h1>Welcome</h1>}

			{user.token ? (
				<div>
					<Link to="/performances">Let's go!</Link>
				</div>
			) : (
				<div>
					<Link to="/login">Log in</Link>
					<Link to="/signup">Sign up</Link>
				</div>
			)}
		</section>
	);
};

export default Home;
