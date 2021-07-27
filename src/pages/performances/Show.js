import React, { useEffect } from "react";
//components
import Review from "../../components/Review";
import NewForm from "../../components/NewForm";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
//Bulma
import { Button, Image } from "react-bulma-components";

const Show = (props) => {
	useEffect(() => {
		// console.log(props.users.token);
		if (props.users.token) {
		} else {
			props.history.push("/");
		}
	}, []);

	//performance id from params
	const id = props.match.params.id;

	const loading = () => {
		return (
			<section className="show-loading">
				<Button className="is-loading btn"></Button>
			</section>
		);
	};

	const loaded = () => {
		//find performance
		const performances = props.performances;
		const performance = performances.find((p) => p.id === parseInt(id));
		//return related reviews into new array
		const revArr = props.reviews.filter((ele) => {
			//only show reviews not favs
			if (ele.performance.id === parseInt(id) && ele.category === "review") {
				return ele;
			}
		});

		return (
			<>
				<header className="show-header">
					<h1>{performance.title}</h1>
				</header>
				<section className="perf-content">
					<Image
						className="show-img"
						src={performance.img}
						alt={performance.title}
					/>
					{performance.photographer ? (
						<p className="photographer">
							Photographer: {performance.photographer}
						</p>
					) : (
						""
					)}
					<p className="summary">{performance.summary}</p>
					<a
						href="mailto:peculiarityproductions@gmail.com?Subject=Quote%20request"
						target="_blank"
						rel="noreferrer"
					>
						<Button className="book-btn is-rounded">Request a quote</Button>
					</a>
				</section>

				<section className="review-container">
					<div className="rev-title">
						<h3>Reviews</h3>
					</div>
					<div className="revs">
						{revArr.map((ele) => (
							<Review
								key={ele.id}
								id={ele.id}
								category={ele.category}
								content={ele.content}
								rating={ele.rating}
								author={ele.user.username}
								url={`/reviews/${ele.id}/edit`}
							/>
						))}
					</div>
				</section>
				<section className="add-review-container">
					<h3>Add Review</h3>
					<NewForm
						users={props.users}
						submitFunc={props.create}
						id={id}
						class="show-form-container"
					/>
				</section>
			</>
		);
	};

	return (
		<div className="main-show-container">
			<Nav />
			{props.reviews ? loaded() : loading()}
			<Footer />
		</div>
	);
};

export default Show;
