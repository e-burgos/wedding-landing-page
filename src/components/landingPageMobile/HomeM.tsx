import React, { useEffect, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { homeSection } from "../../data/homeSection";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		height: "100vh",
		overflow: "hidden",
		position: "relative",
	},
	background: {
		margin: "0 auto",
		backgroundImage: `url(${homeSection.bg.bgM})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "100% 100%",
		height: "100vh",
		zIndex: -2,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	bgShadow: {
		position: "absolute",
		height: "100vh",
		width: "100vW",
		backgroundImage:
			"linear-gradient(to bottom right, #BF862D10, #ECC87890)",
		backgroundSize: "100%",
		indexZ: -1,
		animation:
			"slide-in-right 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
	},
	container: {
		zIndex: 1,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: "100%",
		marginTop: "20%",
	},
	textContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "95%",
	},
	icon: {
		width: "200px",
	},
	title: {
		fontFamily: "TitleFont",
		fontSize: "46pt",
		lineHeight: "48pt",
		color: "white",
		textAlign: "center",
	},
	text: {
		fontFamily: "HeadingFont",
		color: "white",
		fontSize: "20pt",
		lineHeight: "22pt",
		textAlign: "center",
		marginTop: "20px",
		animation:
			"typing 5s steps(40, end), blink-caret 0.75s step-end infinite",
		overflow: "hidden",
		borderRight: "0.15em solid #bf862d",
		whiteSpace: "normal",

		letterSpacing: "0.15em",
	},
}));

const HomeM = () => {
	const classes = useStyles();
	const [className, setClassName] = useState("");

	useEffect(() => {
		setTimeout(() => {
			setClassName(classes.bgShadow);
		}, 1000);
	}, []);

	return (
		<div className={classes.root} id='header'>
			<div className={className}></div>
			<Grid className={classes.background}>
				<Grid className={classes.container}>
					<div className={`${classes.textContainer}`}>
						<span className={classes.title}>Nos Casamos!</span>
						<img
							src={homeSection.icon}
							className={classes.icon}
							alt='icon'
						/>
						<span className={`${classes.text}`}>
							Tantos siglos, tantos mundos, tanto espacio y
							coincidir....
						</span>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default HomeM;
