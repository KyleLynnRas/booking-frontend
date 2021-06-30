//components
import EditForm from "../../components/EditForm";

const Edit = (props) => {
	//get review id from param
	const id = props.match.params.id;
	const reviews = props.reviews;
	//find review
	const review = reviews.find((r) => r.id === parseInt(id));
	//related performance info
	const perfId = review.performance_id;

	return (
		<div className="main-signup-container">
			<section className="edit-content-container">
				<h1>Edit your review</h1>
				<EditForm
					users={props.users}
					id={perfId}
					submitFunc={props.updateReview}
					revId={id}
				/>
			</section>
		</div>
	);
};

export default Edit;
