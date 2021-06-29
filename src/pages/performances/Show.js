import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//components
import Review from "../../components/Review";
import Form from "../../components/Form";

const Show = (props) => {
	useEffect(() => {
		console.log(props.users.token);
		if (props.users.token) {
		} else {
			props.history.push("/login");
		}
	}, []);

	//performance id from params
	const id = props.match.params.id;
	const performances = props.performances;

	const loading = () => {
		return <h1>Loading....</h1>;
	};

	const loaded = () => {
		//find performance
		const performance = performances.find((p) => p.id == id);
		//return related reviews into new array
		const revArr = props.reviews.filter((ele) => {
			if (ele.performance.id == id) {
				return ele;
			}
		});

		return (
			<div>
				<section>
					<img src={performance.img} alt={performance.title} />
					<p>{performance.summary}</p>
					<p>$ {performance.price}</p>
					<a
						href="mailto:peculiarityproductions@gmail.com?Subject=Quote%20request"
						target="_blank"
						rel="noreferrer"
					>
						<button>Request a booking</button>
					</a>
				</section>
				<section>
					<h1>Reviews</h1>
					{revArr.map((ele) => (
						<Review
							key={ele.id}
							id={ele.id}
							category={ele.category}
							content={ele.content}
							author={ele.user.username}
							destroyReview={props.destroyReview}
						/>
					))}
					;
				</section>
			</div>
		);
	};

	return (
		<div>
			<header>
				<h1>{performance.title}</h1>
			</header>
			{props.reviews ? loaded() : loading()}
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
