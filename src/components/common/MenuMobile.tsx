import { Divider, makeStyles, Theme } from "@material-ui/core";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-scroll";
import { menuAssets } from "../../data/menu";
import { sectionList } from "../../data/sectionList";

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		height: "100vh",
		overflow: "hidden",
		width: "100%",
		content: "' '",
		backgroundColor: "rgba(0, 0, 0, 0.5)!important",
		zIndex: 100,
		top: "0px",
		position: "fixed",
		display: "flex",
		flexDirection: "column",
		inset: "0px",
		alignItems: "center",
		[theme.breakpoints.up("lg")]: {
			display: "none",
		},
	},
	root: {
		height: "100vh",
		overflow: "hidden",
		top: "0px",
		position: "fixed",
		display: "flex",
		flexDirection: "column",
		zIndex: 1800,
		width: "0%",
		right: "0px",
		alignItems: "center",
		backgroundImage: "linear-gradient(to bottom right, #BF862D, #ECC878)",
		[theme.breakpoints.up("lg")]: {
			display: "none",
		},
	},
	header: {
		height: "60px",
		width: "100%",
		color: "white",
	},
	body: {
		height: "calc(100vh - 70px)",
		overflowY: "auto",
		display: "flex",
		justifyContent: "start",
		flexDirection: "column",
		textAlign: "start",
		width: "100%",
		paddingLeft: "20px",
	},
	logo: {
		width: "175px",
		[theme.breakpoints.down("xs")]: {
			display: "none",
		},
	},
	buttonText: {
		"fontFamily": "HeadingFont",
		"fontWeight": 400,
		"padding": "7px 15px",
		"display": "block",
		"color": "white",
		"&:hover": {
			transitionProperty: "font-size",
			transitionDuration: "2s",
			fontFamily: "HeadingFontBold",
			fontWeight: 700,
			color: "#FFFFFF",
		},
	},

	closeButton: {
		color: "white",
		border: "none",
		cursor: "pointer",
		background: "transparent",
		width: "30px",
		marginTop: "10px",
		marginRight: "20px",
	},
	buttonTextLanguage: {
		marginTop: "30px",
		color: "white",
		fontSize: "1rem",
		textDecoration: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},

	menuItemActive: {
		"& a": {
			fontSize: "1rem",
		},
	},
	menuItemActiveIndividual: {
		fontSize: "1.7em",
	},
	buttonTextWP: {
		fontFamily: "HeadingFont",
		textTransform: "uppercase",
		padding: "10px 13px",
		[theme.breakpoints.up("md")]: {
			padding: "1px 10px",
			fontSize: "1.3rem",
		},
	},
	divider: {
		backgroundColor: "white",
	},
	imageContainer: {
		display: "flex",
		justifyContent: "center",
	},
	imageMenu: {
		width: "60%",
		marginTop: "40px",
	},
}));

type MenuProps = {
	menuType: "landpage-consumer" | "landpage-agent" | "searcher";
	onClose: Function;
	open: boolean;
	handlePageChange: any;
	currentPage: number;
};

const MenuMobile: React.FC<MenuProps> = ({
	menuType = "",
	onClose = Function.prototype,
	open,
	handlePageChange,
	currentPage,
}) => {
	const classes = useStyles();
	const [closeMenu, setCloseMenu] = useState(false);
	const [, setOpenMenu] = useState(open);

	const animationClass = useMemo(
		() =>
			open
				? "animation-menu-open-mobile"
				: closeMenu
				? "animation-menu-close-mobile"
				: "",
		[open, closeMenu]
	);

	useEffect(
		() =>
			open
				? document.body.classList.add("menu-open")
				: document.body.classList.remove("menu-open"),
		[open, closeMenu]
	);

	function handleCloseMenu() {
		setOpenMenu(false);
		setCloseMenu(true);
		onClose();
	}

	return (
		<>
			{open && (
				<div
					className={classes.container}
					onClick={handleCloseMenu}
					onKeyDown={handleCloseMenu}
					aria-hidden='true'></div>
			)}

			<div className={`${classes.root} ${animationClass}`}>
				<div className={`${classes.header} text-right`}>
					<img
						onClick={handleCloseMenu}
						onFocus={() => void 0}
						aria-hidden='true'
						className={classes.closeButton}
						src={
							open
								? menuAssets.backButton.back
								: menuAssets.backButton.backA
						}
						alt=''
					/>
				</div>
				<div className={classes.body}>
					<div>
						{sectionList.map((section) => (
							<span key={section.key}>
								<Link
									activeClass={classes.menuItemActive}
									to={section.key}
									spy={true}
									smooth={true}
									offset={0}
									key={section.key}
									duration={1000}
									onClick={() => {
										handlePageChange(section.page);
										handleCloseMenu();
									}}
									onFocus={() => void 0}
									aria-hidden='true'>
									<span className={classes.buttonText}>
										{section.value}
									</span>
								</Link>
								<Divider className={classes.divider} />
							</span>
						))}
					</div>
					<div className={classes.imageContainer}>
						<img
							className={classes.imageMenu}
							src={menuAssets.logo.menuGif}
							alt='Xime y Tucu'
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default MenuMobile;
