import React from "react";
//components
import Review from "../../components/Review";

const Show = (props) => {
	//id from params
	const id = props.match.params.id;
	const newId = id.toString();
	const performances = props.performances;
	const performance = performances.find((p) => p.id == id);

	const loading = () => {
		return <h1>Loading....</h1>;
	};

	const loaded = () => {
		//retrn related reviews into new array
		const revArr = props.reviews.filter((ele) => {
			if (ele.performance.id == id) {
				return ele;
			}
		});

		return revArr.map((ele) => {
			return (
				<Review
					key={ele.id}
					id={ele.id}
					category={ele.category}
					content={ele.content}
					author={ele.user.username}
				/>
			);
		});
	};

	return (
		<div>
			<header>
				<h1>{performance.title}</h1>
			</header>
			<section>
				<img src={performance.img} alt={performance.title} />
				<p>{performance.summary}</p>
				<p>$ {performance.price}</p>
			</section>
			<section>
				<h1>Reviews</h1>
				{props.reviews ? loaded() : loading()}
				<button>Add Review</button>
			</section>
		</div>
	);
};

export default Show;
