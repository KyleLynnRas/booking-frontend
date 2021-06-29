import { Link } from "react-router-dom";

const Performance = (props) => {
	return (
		<div id={props.id}>
			<Link to={`/performances/${props.id}`}>
				<h3>{props.title}</h3>
			</Link>
			<img src={props.img} alt={props.title} />
			<p>{props.summary}</p>
			<p>{props.price}</p>
		</div>
	);
};

export default Performance;
