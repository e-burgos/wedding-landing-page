import React, { useState } from "react";
import {
	AppBar,
	Box,
	Hidden,
	IconButton,
	makeStyles,
	Toolbar,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { Link } from "react-scroll";
import MenuDisplay from "./Menu";
import { sectionList } from "../../data/sectionList";
import { menuAssets } from "../../data/menu";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		position: "fixed",
		width: "100%",
		zIndex: 1900,
	},
	appBar: {
		height: "79px",
		backgroundImage: "linear-gradient(to bottom right, #BF862D, #ECC878)",
		boxShadow: "0 5px 20px 2px #00000080",
		[theme.breakpoints.up("xl")]: {
			height: "89px",
		},
	},
	appBarMini: {
		backgroundImage: "linear-gradient(to bottom right, #BF862D, #ECC878)",
		backgroundSize: "100% 100%",
		height: "40px",
		boxShadow: "0 5px 20px 2px #00000080",
		backgroundColor: "transparent",
		[theme.breakpoints.up("lg")]: {
			height: "40px",
		},
		[theme.breakpoints.up("xl")]: {
			height: "50px",
		},
	},
	expandButton: {
		backgroundSize: "100% 100%",

		marginLeft: "auto",
		marginRight: "auto",
		position: "relative",
		display: "block",
		boxShadow: "none",
		backgroundColor: "transparent",
	},
	expandLogo: {
		width: "200px",
		top: "-32px",
		left: "-100px",
		position: "absolute",
	},
	logoContainer: {
		cursor: "pointer",
		backgroundImage: `url(${menuAssets.logo.logo})`,
		backgroundSize: "100% 100%",
		marginRight: "72px",
		marginTop: "60px",
		width: "222px",
		height: "127px",
		backgroundColor: "transparent",
		[theme.breakpoints.up("xl")]: {
			width: "245px",
			height: "132px",
		},
	},
	toolbar: {
		padding: "0px",
		maxHeight: "79px",
		[theme.breakpoints.up("xl")]: {},
	},
	logoLeft: {},
	logoOne: {
		width: "90px",
		position: "relative",
		[theme.breakpoints.up("lg")]: {
			width: "90px",
			marginLeft: "30%",
			top: "70px",
		},
		[theme.breakpoints.up("xl")]: {
			top: "75px",
		},
	},
	logoOneMobile: {},
	logoOneMin: {
		width: "90px",
		position: "relative",
		padding: "8px 0px 0px 40px",
	},
	containerMenuDesktop: {
		display: "flex",
		alignItems: "start",
		justifyContent: "space-between",
		width: "100%",
	},
	containerMenuMobile: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
	},
	buttonText: {
		"fontFamily": "HeadingFont",
		"fontWeight": 400,
		"color": "white",
		"padding": "90px 15px",
		"fontSize": "16px",
		"cursor": "pointer",
		"textAlign": "center",
		"&:hover": {
			fontFamily: "HeadingFontBold",
			fontWeight: 700,
		},
		[theme.breakpoints.up("xl")]: {
			fontSize: "18px",
			padding: "95px 40px 80px 40px",
		},
	},
	buttonLogo: {
		cursor: "pointer",
		padding: "0px 60px 0px 15px",
	},
	spacer: {
		padding: "10px",
		[theme.breakpoints.up("md")]: {
			padding: "10px",
		},
	},
	imagePlayNow: {
		position: "relative",
	},
	buttonIconMenu: {
		marginRight: "30px",
	},
	menuItemActive: {
		"& span": {
			fontFamily: "HeadingFontBold",
			fontWeight: 700,
			color: "#FFFFFF",
			textDecoration: "underline #FFFFFF 3px solid",
		},
	},
	menuItemActiveIndividual: {
		fontFamily: "HeadingFontBold",
		fontWeight: 700,
		color: "#FFFFFF",
	},
	linksContainer: {
		"display": "inline-flex",
		"& a": {
			position: "relative",
		},
	},
	playNowLabel: {
		fontFamily: "TitleFont",
		fontWeight: 400,
		textAlign: "center",
		position: "relative",
		display: "block",
		fontSize: "18px",
		marginTop: "54px",
		userSelect: "none",
		cursor: "pointer",
		[theme.breakpoints.up("xl")]: {
			fontSize: "20px",
			marginTop: "54px",
		},
	},
}));
interface props {
	handlePageChange: any;
	currentPage: number;
	handleExpandedMenu: any;
	expandedMenu: boolean;
}
const LandingPageMenu = ({
	handlePageChange,
	currentPage,
	handleExpandedMenu,
	expandedMenu,
}: props) => {
	const classes = useStyles();
	const [menuOpen, setMenuOpen] = useState(false);
	const [isHoveringMenuItem, setIsHoveringMenuItem] = useState("hero");

	function openMenu() {
		setMenuOpen(!menuOpen);
	}

	return (
		<div className={classes.root}>
			<MenuDisplay
				menuType='landpage-consumer'
				onClose={openMenu}
				open={menuOpen}
				handlePageChange={handlePageChange}
				currentPage={currentPage}></MenuDisplay>
			<>
				<Hidden lgUp>
					<AppBar position='static' className={classes.appBar}>
						<Toolbar className={classes.toolbar}>
							<div className={classes.containerMenuMobile}>
								<Link
									activeClass='active'
									to='hero'
									spy={true}
									smooth={true}
									offset={0}
									duration={500}>
									<span
										onClick={() => handlePageChange(0)}
										onFocus={() => void 0}
										aria-hidden='true'>
										<img
											className={classes.logoOneMin}
											src={menuAssets.logo.logoBar}
											alt='Logo Cats and Dogs'
										/>
									</span>
								</Link>
								<IconButton
									onClick={openMenu}
									disableRipple
									className='button-icon-content mt-0 mb-0 pr-0 pt-0 pb-0'
									edge='start'
									color='inherit'
									aria-label='menu'>
									<Menu
										className={`${classes.buttonIconMenu} button-icon`}
									/>
								</IconButton>
							</div>
						</Toolbar>
					</AppBar>
				</Hidden>

				<Hidden xsDown smDown mdDown>
					<AppBar
						position='static'
						className={
							currentPage === 0 || expandedMenu === true
								? classes.appBar
								: classes.appBarMini
						}>
						<Toolbar className={classes.toolbar}>
							{(currentPage === 0 || expandedMenu === true) && (
								<div
									className={classes.containerMenuDesktop}
									onMouseLeave={(e) =>
										handleExpandedMenu(false)
									}
									onFocus={() => void 0}
									aria-hidden='true'>
									<div className={classes.linksContainer}>
										<span
											onClick={() => handlePageChange(0)}
											onFocus={() => void 0}
											aria-hidden='true'
											className={classes.buttonLogo}>
											<img
												className={classes.logoOne}
												src={menuAssets.logo.logoBar}
												alt='Xime y Tucu'
											/>
										</span>
										{sectionList.map((section) => (
											<span
												key={section.key}
												onFocus={() => void 0}
												aria-hidden='true'
												onMouseOver={(e) =>
													setIsHoveringMenuItem(
														section.key
													)
												}
												onMouseLeave={(e) =>
													setIsHoveringMenuItem("")
												}
												onClick={() =>
													handlePageChange(
														section.page
													)
												}
												className={`${
													classes.buttonText
												} ${
													isHoveringMenuItem ===
														section.key ||
													currentPage === section.page
														? classes.menuItemActiveIndividual
														: ""
												}`}>
												{section.value}
											</span>
										))}
									</div>
									<Box
										className={classes.logoContainer}></Box>
								</div>
							)}
							{currentPage !== 0 && !expandedMenu && (
								<div
									onMouseOver={(e) =>
										handleExpandedMenu(true)
									}
									onFocus={() => void 0}
									aria-hidden='true'
									className={classes.expandButton}>
									<img
										className={classes.expandLogo}
										src={menuAssets.logo.logo}
										alt='Xime y Tucu'
									/>
								</div>
							)}
						</Toolbar>
					</AppBar>
				</Hidden>
			</>
		</div>
	);
};

export default LandingPageMenu;
