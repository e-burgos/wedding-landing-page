/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useRef } from "react";
import { makeStyles, Theme, Grid } from "@material-ui/core";
import { videoSection } from "../../data/videoSection";
import { useIntersectionObserver } from "../../hooks/IntersectionObserver.hook";

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		flexGrow: 1,
		height: "100vh",
		overflow: "hidden",
		fontFamily: "HeadingFont",
		color: "white",
	},
	videoVimeo: {
		borderImage: `url(${videoSection.icons.border}) 30 20 stretch`,
		borderImageSlice: "70",
		borderWidth: "37px",
		borderStyle: "solid",
		width: "auto",
		height: "auto",
		zIndex: 10,
	},
	background: {
		backgroundImage: `url(${videoSection.bg.bg})`,
		backgroundPositionY: "bottom",
		backgroundSize: "cover",
		margin: "0 auto",
		height: "100vh",
		paddingTop: 40,
		position: "relative",
		overflow: "hidden",
		width: "100%",
		justifySelf: "center",
		alignSelf: "center",
		justifyContent: "space-around",
		display: "flex",
		indexZ: -1,
	},
	bgShadow: {
		position: "absolute",
		height: "100%",
		width: "100%",
		backgroundImage:
			"linear-gradient(to bottom right, #BF862D10, #ECC87890)",
		backgroundSize: "100% 100%",
		indexZ: -2,
		animation:
			"slide-in-right 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
	},
}));

const LandingPageGameView = () => {
	const classes = useStyles();
	const refSection = useRef(null);
	const isSectionVisible = useIntersectionObserver(
		refSection,
		{ threshold: 0 },
		true
	);

	return (
		<div className={classes.root} id='GameView'>
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='space-between'
				className={classes.background}>
				<Grid
					direction='row'
					container
					alignItems='center'
					justifyContent='center'>
					{/* <video
            width='320'
            height='240'
            controls
            ref={videoRef1}
            className={classes.videoVimeo}
            style={{ display: 'block' }}>
            <source type='video/mp4' src={videoSection.video[0].src} />
          </video> */}
					<div className={classes.videoVimeo}>
						<iframe
							src={videoSection.video[0].src}
							width='640'
							height='275'
							frameBorder='0'
							allow='autoplay; fullscreen; picture-in-picture'
							allowFullScreen
						/>
					</div>
				</Grid>
				<div
					ref={refSection}
					className={`${
						isSectionVisible ? `${classes.bgShadow} ` : ""
					}`}
				/>
			</Grid>
		</div>
	);
};

export default LandingPageGameView;
