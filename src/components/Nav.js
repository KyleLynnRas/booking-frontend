import { Link } from "react-router-dom";
//icons
import { GoFlame } from "react-icons/go";

const Nav = () => {
	return (
		<nav className="navbar">
			<Link to="/">
				<GoFlame className="nav-icon" />
			</Link>

			<Link to="/performances" className="nav-link">
				Performances
			</Link>
		</nav>
	);
};

export default Nav;
