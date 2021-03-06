import React, { useRef } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { tipsSection } from "../../data/tipsSection";
import { useIntersectionObserver } from "../../hooks/IntersectionObserver.hook";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		height: "100vh",
		overflow: "hidden",
	},
	background: {
		margin: "0 auto",
		backgroundImage: `url(${tipsSection.bg.bg})`,
		backgroundSize: "cover",
		height: "100vh",
		zIndex: -2,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	bgStars: {
		position: "absolute",
		height: "100%",
		width: "100%",
		backgroundImage: `url(${tipsSection.img.stars})`,
		backgroundSize: "repeat",
		zIndex: 2,
		animation:
			"scale-in-ver-bottom 3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
	},
	title: {
		fontFamily: "TitleFont",
		color: "white",
		fontSize: "45pt",
		textAlign: "center",
		zIndex: 10,
	},
	text: {
		fontFamily: "HeadingFont",
		color: "#F4E2C2",
		fontSize: "20pt",
		textAlign: "center",
		zIndex: 10,
	},
	cardsContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginTop: "50px",
		zIndex: 10,
	},
	card: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundImage: "linear-gradient(to bottom right, #BF862D, #ECC878)",
		width: "290px",
		borderRadius: "15px",
		margin: "20px",
		padding: "25px",
		boxSizing: "border-box",
	},
	cardTitle: {
		fontFamily: "TitleFont",
		color: "white",
		fontSize: "30pt",
		textAlign: "center",
	},
	cardText: {
		fontFamily: "HeadingFont",
		color: "white",
		fontSize: "16pt",
		textAlign: "center",
		marginBottom: "20px",
	},
	cardButton: {
		"fontFamily": "HeadingFont",
		"borderRadius": "12px",
		"border": "1px solid#E0D6B2",
		"color": "#BF862D",
		"fontSize": "12pt",
		"textAlign": "center",
		"width": "90%",
		"height": "40px",
		"&:hover": {
			fontFamily: "HeadingFontBold",
			fontWeight: 700,
			border: "1px solid#BF862D",
		},
	},
	cardIcon: {
		width: "200px",
	},
}));

const Tips = () => {
	const classes = useStyles();
	const refSection = useRef(null);
	const isSectionVisible = useIntersectionObserver(
		refSection,
		{ threshold: 0 },
		true
	);

	return (
		<div className={classes.root} id='page1'>
			<Grid className={classes.background}>
				<span className={classes.title}>{tipsSection.info.title}</span>
				<span className={classes.text}>{tipsSection.info.text}</span>
				<div className={classes.cardsContainer}>
					{tipsSection.cards.map((card) => (
						<div key={card.name} className={classes.card}>
							<span className={classes.cardTitle}>
								{card.name}
							</span>
							<img
								className={classes.cardIcon}
								src={card.icon}
								alt='card'
							/>
							<span className={classes.cardText}>
								{card.text}
							</span>
							<button className={`${classes.cardButton}`}>
								{card.textButton}
							</button>
						</div>
					))}
				</div>
				<div
					ref={refSection}
					className={`${
						isSectionVisible ? ` ${classes.bgStars}` : ""
					}`}
				/>
			</Grid>
		</div>
	);
};

export default Tips;
