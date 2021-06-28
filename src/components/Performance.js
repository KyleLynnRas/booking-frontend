const Performance = (props) => {
	return (
		<div>
			<h3>{props.title}</h3>
			<img src={props.img} alt={props.title} />
			<p>{props.summary}</p>
			<p>{props.price}</p>
		</div>
	);
};

export default Performance;
