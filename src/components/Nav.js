import { Link } from "react-router-dom";
//icons
import { GoFlame } from "react-icons/go";

const Nav = () => {
	return (
		<nav className="navbar">
			<Link to="/mypage" className="nav-link">
				My page
			</Link>
			<Link to="/performances" className="nav-link">
				Performances
			</Link>
			<Link to="/">
				<GoFlame className="nav-icon" className="nav-link" />
			</Link>
		</nav>
	);
};

export default Nav;
