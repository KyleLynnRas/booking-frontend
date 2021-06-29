import Form from "../../components/Form";

const Edit = (props) => {
	//get review id from param
	const id = props.match.params.id;
	const reviews = props.reviews;
	//find review
	const review = reviews.find((r) => r.id == id);
	//related performance info
	const perfId = review.performance_id;

	return (
		<div>
			<h1>EDIT REVIEW</h1>
			<Form
				users={props.users}
				id={perfId}
				submitFunc={props.updateReview}
				revId={id}
			/>
		</div>
	);
};

export default Edit;
