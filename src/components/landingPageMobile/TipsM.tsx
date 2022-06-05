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
	bgShadow: {
		position: "absolute",
		height: "100%",
		width: "100%",
		backgroundImage:
			"linear-gradient(to bottom right, #BF862D10, #ECC87890)",
		backgroundSize: "100% 100%",
		indexZ: -1,
		animation:
			"slide-in-right 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
	},
	title: {
		fontFamily: "TitleFont",
		color: "#ECC87890",
		fontSize: "40pt",
		textAlign: "center",
	},
	text: {
		fontFamily: "TitleFont",
		color: "#ECC87890",
		fontSize: "40pt",
		textAlign: "center",
	},
}));

const TipsM = () => {
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
				<h1 className={classes.title}>{tipsSection.info.title}</h1>
				<h2 className={classes.text}>{tipsSection.info.text}</h2>
				<div
					ref={refSection}
					className={`${isSectionVisible ? classes.bgShadow : ""}`}
				/>
			</Grid>
		</div>
	);
};

export default TipsM;
