import { Link } from "react-router-dom";

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
								<button type="button" class="btn btn-outline-light">
									Let's go!
								</button>
							</Link>
						</div>
					) : (
						<div className="home-btn-box-loggedout">
							<Link to="/login">
								<button type="button" class="btn btn-outline-light">
									Log in
								</button>
							</Link>
							<Link to="/signup">
								<button type="button" class="btn btn-outline-light">
									Sign up
								</button>
							</Link>
						</div>
					)}
				</div>
			</section>
		</div>
	);
};

export default Home;
