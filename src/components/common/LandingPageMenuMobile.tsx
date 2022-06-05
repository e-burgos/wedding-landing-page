import { AppBar, makeStyles, Theme } from "@material-ui/core";
import React, { useState } from "react";
import { menuAssets } from "../../data/menu";
import MenuDisplay from "./MenuMobile";

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		flexGrow: 1,
		position: "fixed",
		width: "100%",
		zIndex: 1900,
		left: "0px",
	},
	menuContainer: {
		position: "fixed",
		top: "0px",
		width: "100%",
		display: "flex",
		justifyContent: "center",
	},
	centerLogo: {
		width: "150px",
	},
	centerMiniLogo: {
		width: "120px",
	},
	logoContainer: {
		backgroundImage: `url(${menuAssets.logo.logo})`,
		backgroundSize: "100% 100%",
		backgroundColor: "transparent",
		marginLeft: "auto",
		marginRight: "auto",
		width: "100px",
		height: "auto",
		top: "16px",
		position: "relative",
	},
	logoOneMin: {
		width: "60px",
		position: "relative",
		left: "5px",
		top: "10px",
	},
	toggleButton: {
		width: "30px",
		position: "relative",
		right: "26px",
		top: "15px",
		zIndex: 40,
	},
	containerMenuMobile: {
		display: "flex",
		justifyContent: "space-between",
		width: "100%",
		height: "60px",
		float: "right",
		backgroundImage: "linear-gradient(to bottom right, #BF862D, #ECC878)",
		boxShadow: "0 5px 20px 2px #00000080",
	},
	appBarMini: {
		backgroundImage: "linear-gradient(to bottom right, #BF862D, #ECC878)",
		backgroundSize: "100% 100%",
		boxShadow: "0 5px 20px 2px #00000080",
		backgroundColor: "transparent",
		height: "30px",
		zIndex: 10,
	},
}));
interface props {
	handlePageChange: any;
	currentPage: number;
	handleExpandedMenu: any;
	expandedMenu: boolean;
	handleMiniMenu?: boolean;
}
const LandingPageMenuMobile = ({
	handlePageChange,
	currentPage,
	handleMiniMenu,
	handleExpandedMenu,
	expandedMenu,
}: props) => {
	const classes = useStyles();
	const [menuOpen, setMenuOpen] = useState(false);

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
			{handleMiniMenu ? (
				<AppBar position='static' className={classes.appBarMini}>
					<span className={classes.menuContainer}>
						<img
							className={classes.centerMiniLogo}
							src={menuAssets.logo.logo}
							alt='Logo'
						/>
					</span>
				</AppBar>
			) : (
				<AppBar>
					<div className={classes.containerMenuMobile}>
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
						<span onClick={openMenu} aria-hidden='true'>
							<img
								className={classes.toggleButton}
								src={
									menuOpen
										? menuAssets.menuButton.menuButtonH
										: menuAssets.menuButton.menuButton
								}
								alt='Logo Cats and Dogs'
							/>
						</span>
					</div>
					<span className={classes.menuContainer}>
						<img
							className={classes.centerLogo}
							src={menuAssets.logo.logo}
							alt='logo'
						/>
					</span>
				</AppBar>
			)}
		</div>
	);
};

export default LandingPageMenuMobile;
