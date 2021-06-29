import { Link } from "react-router-dom";

const Review = (props) => {
	const handleChange = (e) => {
		//review id
		const revId = props.id;
		//run func from app
		props.destroyReview(revId);
	};

	return (
		<div id={props.id} className={props.category}>
			<h4>Rating: {props.rating}</h4>
			<p>
				"{props.content}" - {props.author}
			</p>
			<button>
				<Link to={`/reviews/${props.id}/edit`}>Edit</Link>
			</button>
			<button onClick={handleChange}>Delete</button>
		</div>
	);
};

export default Review;
