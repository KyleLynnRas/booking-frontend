import React, { useEffect } from "react";
//components
import Performance from "../../components/Performance";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Specialty from "../../components/Specialty";
//icons
import { MdBusinessCenter } from "react-icons/md";
import { GiDiamondRing } from "react-icons/gi";
import { FaBirthdayCake } from "react-icons/fa";
//Bulma
import { Button } from "react-bulma-components";

const Index = (props) => {
	useEffect(() => {
		// console.log(props.user.token);
		if (props.user.token) {
		} else {
			props.history.push("/");
		}
	}, []);

	const loading = () => {
		return (
			<div className="index-loading">
				<Button className="is-loading btn"></Button>
			</div>
		);
	};

	const loaded = () => {
		return props.performances.map((ele, index) => {
			return (
				<Performance key={ele.id} id={ele.id} title={ele.title} img={ele.img} />
			);
		});
	};

	return (
		<div className="index-main-contianer">
			<Nav />
			<header className="index-header">
				<h1>Peculiarity Productions</h1>
			</header>
			<section className="content-container">
				<h2>
					Make your event memorable by adding some peculiar entertainment!
				</h2>
				<p>
					Dream it up, and we can help make it happen with our team of
					performers specializing in a wide array of circus arts. Our
					performances are perfect for every occasion:
				</p>
				<div className="icon-container">
					<Specialty
						className="index-icon"
						icon={<GiDiamondRing />}
						par="Weddings"
					/>
					<Specialty
						className="index-icon"
						icon={<FaBirthdayCake />}
						par="Birthdays"
					/>
					<Specialty
						className="index-icon"
						icon={<MdBusinessCenter />}
						par="Corporate"
					/>
				</div>
			</section>
			<section className="cards-container">
				<h2>Browse our performance packages</h2>
				<div className="perf-grid-container">
					{props.performances ? loaded() : loading()}
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Index;
