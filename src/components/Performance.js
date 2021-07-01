import { Link } from "react-router-dom";
//Bulma
import { Card } from "react-bulma-components";

const Performance = (props) => {
	return (
		<Card id={props.id} className="performance-container is-rounded">
			<Link to={`/performances/${props.id}`}>
				<img src={props.img} alt={props.title} />
			</Link>
		</Card>
	);
};

export default Performance;
