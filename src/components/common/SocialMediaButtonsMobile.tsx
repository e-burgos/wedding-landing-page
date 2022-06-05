/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { makeStyles, Grid, Theme } from "@material-ui/core";
import { social } from "../../data/social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCamera,
	faLocationCrosshairs,
	faBus,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: "100%",
		height: "100vh",
		zIndex: 50,
		position: "absolute",
	},
	bgContainer: {
		width: "319px",
		height: "65px",
		backgroundImage: `url(${social.container.socialContainerM})`,
		backgroundSize: "cover",
		backgroundColor: "transparent",
		left: "50%",
		transform: "translateX(-50%)",
		position: "fixed",
		bottom: "0px",
	},
	container: {
		height: "60px",
		paddingTop: "1px",
	},
	socialMediaImage: {
		width: "50px",
		height: "50px",
	},
	gridContainer: {
		height: "100%",
		padding: "0px 30px",
	},
	iconContainer: {
		"backgroundImage": "linear-gradient(to bottom right, #BF862D, #ECC878)",
		"width": "48px",
		"height": "48px",
		"display": "flex",
		"justifyContent": "center",
		"alignItems": "center",
		"borderRadius": "50%",
		"&:hover": {
			backgroundImage:
				"linear-gradient(to bottom right, #ECC878, #BF862D)",
		},
	},
	icon: {
		"width": "25px",
		"height": "25px",
		"color": "white",
		"&:hover": {
			width: "30px",
			height: "30px",
		},
	},
}));

const SocialMediaButtonsMobile = () => {
	const classes = useStyles();
	return (
		<>
			<div className={classes.root}>
				<div className={classes.bgContainer}>
					<div className={classes.container}>
						<Grid
							container
							direction='column'
							alignItems='center'
							justifyContent='flex-end'
							className={classes.gridContainer}>
							<Grid item className={classes.iconContainer}>
								<a href='#' target='_blank' rel='noreferrer'>
									<FontAwesomeIcon
										className={classes.icon}
										icon={faCamera}
									/>
								</a>
							</Grid>

							<Grid item className={classes.iconContainer}>
								<a href='#' target='_blank' rel='noreferrer'>
									<FontAwesomeIcon
										className={classes.icon}
										icon={faLocationCrosshairs}
									/>
								</a>
							</Grid>

							<Grid item className={classes.iconContainer}>
								<a href='#' target='_blank' rel='noreferrer'>
									<FontAwesomeIcon
										className={classes.icon}
										icon={faBus}
									/>
								</a>
							</Grid>
						</Grid>
					</div>
				</div>
			</div>
		</>
	);
};

export default SocialMediaButtonsMobile;
