import { Link } from "react-router-dom";
//icons
import { BsFillStarFill } from "react-icons/bs";

const Review = (props) => {
	return (
		<div id={props.id} className="review">
			<Link className="review-link" to={props.url}>
				{props.rating === 1 ? (
					<h4>
						<BsFillStarFill />
					</h4>
				) : props.rating === 2 ? (
					<h4>
						<BsFillStarFill />
						<BsFillStarFill />
					</h4>
				) : props.rating === 3 ? (
					<h4>
						<BsFillStarFill />
						<BsFillStarFill />
						<BsFillStarFill />
					</h4>
				) : props.rating === 4 ? (
					<h4>
						<BsFillStarFill />
						<BsFillStarFill />
						<BsFillStarFill />
						<BsFillStarFill />
					</h4>
				) : (
					<h4>
						<BsFillStarFill />
						<BsFillStarFill />
						<BsFillStarFill />
						<BsFillStarFill />
						<BsFillStarFill />
					</h4>
				)}
				<p>
					"{props.content}" - {props.author}
				</p>
			</Link>
		</div>
	);
};

export default Review;
