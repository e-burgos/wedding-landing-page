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
		zIndex: 1600,
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
		alignItems: "center",
		backgroundImage: "linear-gradient(to bottom right, #BF862D, #ECC878)",
		[theme.breakpoints.up("lg")]: {
			display: "none",
		},
	},
	header: {
		height: "calc(50px - 20px)",
		padding: "15px 15px",
		width: "100%",
		color: "white",
	},
	body: {
		height: "calc(100vh - 70px)",
		overflowY: "auto",
		display: "flex",
		justifyContent: "space-between",
		flexDirection: "column",
		textAlign: "center",
		width: "100%",
	},
	logo: {
		width: "250px",
		marginBottom: "25px",
	},
	buttonText: {
		"fontFamily": "HeadingFont",
		"fontWeight": 400,
		"textTransform": "uppercase",
		"padding": "5px 13px",
		"display": "block",
		"textAlign": "center",
		"color": "white",
		[theme.breakpoints.up("md")]: {
			padding: "15px 23px",
			fontSize: "1.rem",
		},
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
	subMenuLanguage: {
		borderRadius: "10px",
		backgroundImage: "linear-gradient(to bottom right, #BF862D, #ECC878)",
		width: "100%",
	},
	subMenuComingSoon: {
		fontFamily: "HeadingFont",
		textTransform: "uppercase",
		marginLeft: "10px",
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
	buttonTextPD: {
		fontFamily: "HeadingFont",
		textTransform: "uppercase",
		marginTop: "100px",
		padding: "10px 13px",
		[theme.breakpoints.up("md")]: {
			padding: "1px 10px",
			fontSize: "1.3rem",
		},
	},
	spacer: {
		[theme.breakpoints.up("xl")]: {
			padding: "1px 10px",
		},
	},
}));

type MenuProps = {
	menuType: "landpage-consumer" | "landpage-agent" | "searcher";
	onClose: Function;
	open: boolean;
	handlePageChange: any;
	currentPage: number;
};

const Menu: React.FC<MenuProps> = ({
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
				? "animation-menu-open"
				: closeMenu
				? "animation-menu-close"
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
				<div className={`${classes.header} text-center`}>
					<button
						onClick={handleCloseMenu}
						className={`${classes.closeButton} font-25`}>
						&times;
					</button>
				</div>
				<div className={classes.body}>
					<div>
						<Divider />
						<div>
							<Link
								activeClass='active'
								to='hero'
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								onClick={() => {
									handlePageChange(0);
									handleCloseMenu();
								}}
								onFocus={() => void 0}
								aria-hidden='true'>
								<span>
									<img
										src={menuAssets.logo.logo}
										alt=''
										className={classes.logo}
									/>
								</span>
							</Link>

							{sectionList.map((section) => (
								<Link
									activeClass={classes.menuItemActive}
									to={section.key}
									spy={true}
									smooth={true}
									offset={0}
									duration={1000}
									key={section.key}
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
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Menu;
