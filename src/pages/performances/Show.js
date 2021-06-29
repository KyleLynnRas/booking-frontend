import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//components
import Review from "../../components/Review";
import Form from "../../components/Form";

const Show = (props) => {
	//performance id from params
	const id = props.match.params.id;
	const performances = props.performances;
	const performance = performances.find((p) => p.id == id);

	const loading = () => {
		return <h1>Loading....</h1>;
	};

	const loaded = () => {
		//return related reviews into new array
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
					destroyReview={props.destroyReview}
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
			</section>
			<section>
				<h3>Add Review</h3>
				<Form users={props.users} submitFunc={props.create} id={id} />
			</section>
			<button>
				<Link to="/performances">Back</Link>
			</button>
		</div>
	);
};

export default Show;
