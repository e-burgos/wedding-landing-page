import React, { useRef, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { partySection } from "../../data/partySection";
import { useIntersectionObserver } from "../../hooks/IntersectionObserver.hook";
import ReactCardFlip from "react-card-flip";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		height: "100vh",
		overflow: "hidden",
	},
	background: {
		margin: "0 auto",
		backgroundImage: `url(${partySection.bg.bg})`,
		backgroundSize: "cover",
		height: "100vh",
		zIndex: -1,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	bgParty: {
		position: "absolute",
		height: "100%",
		width: "100%",
		backgroundImage: `url(${partySection.icons.gif})`,
		backgroundSize: "repeat",
		zIndex: 2,
		animation:
			"slide-in-right 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both",
	},
	bgShadow: {
		position: "absolute",
		height: "100%",
		width: "100%",
		backgroundImage:
			"linear-gradient(to bottom right, #BF862D10, #ECC87890)",
		backgroundSize: "100% 100%",
		zIndex: 1,
		animation:
			"slide-in-right 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
	},
	cardFlip: {
		zIndex: 10,
		animation:
			"scale-in-center 3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
	},
	card: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
	},
	cardImg: {
		height: "70vh",
	},
}));

const Fiesta = () => {
	const classes = useStyles();
	const refSection = useRef(null);
	const isSectionVisible = useIntersectionObserver(
		refSection,
		{ threshold: 0 },
		true
	);
	const [flip, setFlip] = useState("");

	return (
		<div className={classes.root} id='page1'>
			<Grid className={classes.background}>
				<div
					ref={refSection}
					className={`${
						isSectionVisible ? ` ${classes.cardFlip}` : ""
					}`}>
					<ReactCardFlip
						isFlipped={flip === "front"}
						flipDirection='horizontal'
						flipSpeedBackToFront={1}
						flipSpeedFrontToBack={1}>
						<div className={classes.card}>
							<img
								onPointerEnter={(e) => setFlip("front")}
								onFocus={() => void 0}
								aria-hidden='true'
								src={partySection.icons.card}
								alt='imageheader'
								className={classes.cardImg}
							/>
						</div>
						<div
							onPointerOut={(e) => setFlip("")}
							onFocus={() => void 0}
							aria-hidden='true'
							className={classes.card}>
							<img
								src={partySection.icons.card}
								alt='card'
								className={classes.cardImg}
							/>
						</div>
					</ReactCardFlip>
				</div>
				<div
					ref={refSection}
					className={`${
						isSectionVisible ? `${classes.bgShadow} ` : ""
					}`}
				/>
				<div
					ref={refSection}
					className={`${
						isSectionVisible ? ` ${classes.bgParty}` : ""
					}`}
				/>
			</Grid>
		</div>
	);
};

export default Fiesta;
