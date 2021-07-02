import React, { useEffect } from "react";
//components
import Review from "../components/Review";
import Nav from "../components/Nav";

const UserShow = (props) => {
	useEffect(() => {
		// console.log(props.users.token);
		if (props.users.token) {
		} else {
			props.history.push("/");
		}
	}, []);

	const loading = () => {
		return <h1>Loading...</h1>;
	};

	const loaded = () => {
		//find current user id from props
		const user = props.users.user;

		//return user's realted reviews into new array
		const userReviews = props.reviews.filter((ele) => {
			if (ele.user.id === parseInt(user)) {
				// console.log(ele.performance)
				return ele;
			}
		});

		//return of loaded
		return (
			<div className="revs">
				{userReviews.map((ele) => (
					// link back to perf show pg
					<Review
						key={ele.id}
						author={ele.user.username}
						content={ele.content}
						url={`/performances/${ele.performance.id}`}
					/>
				))}
			</div>
		);
	};

	return (
		<div className="main-user-container">
			<Nav />
			<section className="user-content-container">
				<h1>My Reviews</h1>
				{props.reviews && props.users ? loaded() : loading()}
			</section>
		</div>
	);
};

export default UserShow;
