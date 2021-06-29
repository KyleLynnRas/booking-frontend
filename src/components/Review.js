const Review = (props) => {
	return (
		<div className={props.category}>
			<h4>Rating: {props.rating}</h4>
			<p>
				"{props.content}" - {props.author}
			</p>
			<button>Edit</button>
			<button>Delete</button>
		</div>
	);
};

export default Review;
