import React, { useEffect } from "react";
//components
import EditForm from "../../components/EditForm";
import Nav from "../../components/Nav";

const Edit = (props) => {
	useEffect(() => {
		// console.log(props.users.token);
		if (props.users.token) {
		} else {
			props.history.push("/login");
		}
	}, []);

	const loading = () => {
		return <h1>Loading...</h1>;
	};

	const loaded = () => {
		//get review id from param
		const id = props.match.params.id;
		const reviews = props.reviews;
		//find review - pass to edit form for starter data
		const review = reviews.find((r) => r.id === parseInt(id));
		//related performance info
		const perfId = review.performance_id;
		return (
			<EditForm
				users={props.users}
				id={perfId}
				submitFunc={props.updateReview}
				revId={id}
				initialReview={review}
				destroyReview={props.destroyReview}
			/>
		);
	};

	return (
		<div className="main-signup-container">
			<Nav />
			<section className="edit-content-container">
				<h1>Edit your review</h1>
				{props.users && props.reviews ? loaded() : loading()}
			</section>
		</div>
	);
};

export default Edit;
