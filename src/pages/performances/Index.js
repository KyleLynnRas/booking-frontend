import React, { useEffect } from "react";
//components
import Performance from "../../components/Performance";

const Index = (props) => {
	useEffect(() => {
		console.log(props.user.token);
		if (props.user.token) {
		} else {
			props.history.push("/login");
		}
	}, []);

	const loading = () => {
		return (
			<div className="loading">
				<h1>Loading...</h1>
			</div>
		);
	};

	const loaded = () => {
		return props.performances.map((ele, index) => {
			return (
				<Performance
					key={index + 1}
					id={index + 1}
					title={ele.title}
					img={ele.img}
					summary={ele.summary}
					price={ele.price}
				/>
			);
		});
	};

	return (
		<div>
			<header>
				<h1>Peculiarity Productions</h1>
				<p>Make your event memorable by adding some peculiar entertainment!</p>
			</header>
			<section>
				<h2>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid quam
					tempora iste sit assumenda ea deleniti esse eum, corporis,
					reprehenderit a! Nulla perspiciatis voluptates blanditiis porro neque
					temporibus ea unde.
				</h2>
			</section>
			<section>{props.performances ? loaded() : loading()}</section>
		</div>
	);
};

export default Index;
