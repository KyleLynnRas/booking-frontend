import { Link } from "react-router-dom";
//Bulma
import { Button } from "react-bulma-components";

const Home = ({ user }) => {
	return (
		<div className="home-main-container">
			<section className="home-header">
				<h1>Peculiarity Productions</h1>
				<p>Make your event memorable by adding some peculiar entertainment</p>
				<div className="home-links">
					{user.token ? (
						<div className="home-btn-box-loggedin">
							<Link to="/performances">
								<Button type="button" className="btn btn-outline-light">
									Let's go!
								</Button>
							</Link>
						</div>
					) : (
						<div className="home-btn-box-loggedout">
							<Link to="/login">
								<Button className="btn">Log in</Button>
							</Link>
							<Link to="/signup">
								<Button className="btn">Sign up</Button>
							</Link>
						</div>
					)}
				</div>
			</section>
		</div>
	);
};

export default Home;
