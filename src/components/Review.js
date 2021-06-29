import { Link } from "react-router-dom";

const Review = (props) => {
	return (
		<div id={props.id} className={props.category}>
			<h4>Rating: {props.rating}</h4>
			<p>
				"{props.content}" - {props.author}
			</p>
			<button>
				<Link to={`/reviews/${props.id}/edit`}>Edit</Link>
			</button>
			<button>Delete</button>
		</div>
	);
};

export default Review;
