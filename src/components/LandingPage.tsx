import { Grid, makeStyles } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { BottomScrollListener } from "react-bottom-scroll-listener";
import ReactPageScroller from "react-page-scroller";
import { Element } from "react-scroll";
import { useIntersectionObserver } from "../hooks/IntersectionObserver.hook";
import Footer from "./landingPage/Footer";
import Video from "./landingPage/Video";
import Home from "./landingPage/Home";
import LandingPageMenu from "./common/LandingPageMenu";
import Retratos from "./landingPage/Retratos";
import Fiesta from "./landingPage/Fiesta";
import Regalos from "./landingPage/Regalos";
import Tips from "./landingPage/Tips";
import Contador from "./landingPage/Contador";
import SocialMediaButtons from "./common/SocialMediaButtons";
import SocialMediaButtonsMobile from "./common/SocialMediaButtonsMobile";
import FooterM from "./landingPageMobile/FooterM";
import VideoM from "./landingPageMobile/VideoM";
import HomeM from "./landingPageMobile/HomeM";
import LandingPageMenuMobile from "./common/LandingPageMenuMobile";
import RetratosM from "./landingPageMobile/RetratosM";
import FiestaM from "./landingPageMobile/FiestaM";
import RegalosM from "./landingPageMobile/RegalosM";
import TipsM from "./landingPageMobile/TipsM";
import ContadorM from "./landingPageMobile/ContadorM";

const useStyles = makeStyles((theme) => ({
	"root": {
		flexGrow: 1,
		overflowX: "hidden",
		overflowY: "hidden",
		[theme.breakpoints.down("xs")]: {
			display: "none",
		},
	},
	"rootMobile": {
		flexGrow: 1,
		overflowX: "hidden",
		overflowY: "hidden",
		display: "flex",
	},
	"@keyframes shake": {
		"0%": {
			transform: "rotate(1deg)",
		},

		"50%": {
			transform: "rotate(-1deg)",
		},

		"100%": {
			transform: "rotate(1deg)",
		},
	},
	"@keyframes fluent": {
		"0%": {
			opacity: "0",
			transform: "translate(-50%,-70%)",
		},
		"100%": {
			opacity: "1",
			transform: "translate(-50%,-50%)",
		},
	},
	"comingsoon": {
		width: "45vh",
	},
	"mobileAsset": {
		width: "40vh",
		position: "fixed",
		bottom: "-40px",
		left: 0,
	},
	"mobileBar": {
		position: "fixed",
		width: "100%",
		display: "block",
		top: 0,
		left: 0,
	},
	"logoImage": {
		position: "fixed",
		top: "21px",
		left: "20%",
		width: "32vh",
	},
}));

const LandingPage = () => {
	const classes = useStyles();
	const rootRef = useRef(null);
	const homeRef = useRef(null);
	const page1Ref = useRef(null);
	const page2Ref = useRef(null);
	const page3Ref = useRef(null);
	const page4Ref = useRef(null);
	const page5Ref = useRef(null);
	const page6Ref = useRef(null);
	const contactUsRef = useRef(null);
	const rootRefMobile = useRef(null);
	const homeRefMobile = useRef(null);
	const page1RefMobile = useRef(null);
	const page2RefMobile = useRef(null);
	const page3RefMobile = useRef(null);
	const page4RefMobile = useRef(null);
	const page5RefMobile = useRef(null);
	const page6RefMobile = useRef(null);
	const contactUsRefMobile = useRef(null);
	const contactUsRefMobileDiv = useRef(null);
	const [isMediaVisible, setIsMediaVisible] = useState(true);
	const [currentPage, setCurrentPage] = useState(0);
	const [expandedMenu, setExpandedMenu] = useState(false);
	const [miniMenu, setMiniMenu] = useState(false);

	const onScrollBottom = (e: any) => {
		console.log("scroll");
		if (e.nativeEvent.wheelDeltaY > 100) {
			setIsMediaVisible(true);
		}
	};
	const handleOnDocumentBottom = () => {
		setIsMediaVisible(false);
	};

	const handlePageChange = (number: number) => {
		if (number <= 0) {
			setCurrentPage(0);
			setMiniMenu(false);
		} else if (number > 9) {
			setCurrentPage(9);
		} else {
			setCurrentPage(number);
			setMiniMenu(true);
		}
		if (number === 9) {
			setIsMediaVisible(false);
		} else {
			setIsMediaVisible(true);
		}
	};

	const handleExpandedMenu = (value: any) => {
		setExpandedMenu(value);
	};

	let isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (
				isMobile.Android() ||
				isMobile.BlackBerry() ||
				isMobile.iOS() ||
				isMobile.Opera() ||
				isMobile.Windows()
			);
		},
	};

	const isBottomVisibleMobile = useIntersectionObserver(
		contactUsRefMobileDiv,
		{ threshold: 0 },
		false
	);

	if (isMobile.Android() || isMobile.iOS()) {
		return (
			<>
				{!isBottomVisibleMobile && (
					<SocialMediaButtonsMobile></SocialMediaButtonsMobile>
				)}
				<div className={classes.rootMobile}>
					<Grid
						container
						alignItems='center'
						justifyContent='center'
						direction='column'
						wrap='nowrap'
						ref={rootRefMobile}>
						<Grid item onTouchStart={() => setMiniMenu(false)}>
							<LandingPageMenuMobile
								handlePageChange={handlePageChange}
								currentPage={currentPage}
								handleExpandedMenu={handleExpandedMenu}
								expandedMenu={expandedMenu}
								handleMiniMenu={miniMenu}
							/>
						</Grid>
						<Grid item onTouchStart={() => setMiniMenu(true)}>
							<Element name='home' ref={homeRefMobile}>
								<HomeM />
							</Element>
						</Grid>
						<Grid item onTouchStart={() => setMiniMenu(true)}>
							<Element
								name='page1'
								ref={page1RefMobile}
								style={{
									position: "relative",
									width: "100vw",
								}}>
								<ContadorM />
							</Element>
						</Grid>
						<Grid item onTouchStart={() => setMiniMenu(true)}>
							<Element
								name='page2'
								ref={page2RefMobile}
								style={{
									position: "relative",
									width: "100vw",
								}}>
								<VideoM />
							</Element>
						</Grid>
						<Grid item onTouchStart={() => setMiniMenu(true)}>
							<Element
								name='page3'
								ref={page3RefMobile}
								style={{
									position: "relative",
									width: "100vw",
								}}>
								<FiestaM />
							</Element>
						</Grid>
						<Grid item onTouchStart={() => setMiniMenu(true)}>
							<Element
								name='page4'
								ref={page4RefMobile}
								style={{
									position: "relative",
									width: "100vw",
								}}>
								<RetratosM />
							</Element>
						</Grid>
						<Grid item onTouchStart={() => setMiniMenu(true)}>
							<Element
								name='page5'
								ref={page5RefMobile}
								style={{
									position: "relative",
									width: "100vw",
								}}>
								<TipsM />
							</Element>
						</Grid>

						<Grid item onTouchStart={() => setMiniMenu(true)}>
							<Element
								name='page6'
								ref={page6RefMobile}
								style={{
									position: "relative",
									width: "100vw",
								}}>
								<RegalosM />
							</Element>
						</Grid>
						<Grid
							item
							ref={contactUsRefMobileDiv}
							onTouchStart={() => setMiniMenu(true)}>
							<Element
								name='contactUsMobile'
								style={{ position: "relative", width: "100vw" }}
								ref={contactUsRefMobile}>
								<FooterM
									handlePageChange={handlePageChange}
									currentPage={currentPage}
								/>
							</Element>
						</Grid>
					</Grid>
				</div>
			</>
		);
	} else {
		return (
			<>
				<div className={classes.root}>
					<BottomScrollListener onBottom={handleOnDocumentBottom} />
					{isMediaVisible && (
						<SocialMediaButtons></SocialMediaButtons>
					)}
					<Grid
						container
						direction='column'
						wrap='nowrap'
						ref={rootRef}
						onScroll={onScrollBottom}>
						<Grid item>
							<LandingPageMenu
								handlePageChange={handlePageChange}
								currentPage={currentPage}
								handleExpandedMenu={handleExpandedMenu}
								expandedMenu={expandedMenu}
							/>
						</Grid>
						<ReactPageScroller
							pageOnChange={handlePageChange}
							customPageNumber={currentPage}
							renderAllPagesOnFirstRender>
							<Grid item>
								<Element name='home' ref={homeRef}>
									<Home />
								</Element>
							</Grid>
							<Grid item>
								<Element
									name='page1'
									ref={page1Ref}
									style={{ position: "relative" }}>
									<Contador />
								</Element>
							</Grid>
							<Grid item>
								<Element
									name='page2'
									ref={page2Ref}
									style={{ position: "relative" }}>
									<Video />
								</Element>
							</Grid>
							<Grid item>
								<Element
									name='page3'
									ref={page3Ref}
									style={{ position: "relative" }}>
									<Fiesta />
								</Element>
							</Grid>
							<Grid item>
								<Element
									name='page4'
									ref={page4Ref}
									style={{ position: "relative" }}>
									<Retratos />
								</Element>
							</Grid>
							<Grid item>
								<Element
									name='page5'
									ref={page5Ref}
									style={{ position: "relative" }}>
									<Tips />
								</Element>
							</Grid>

							<Grid item>
								<Element
									name='page6'
									ref={page6Ref}
									style={{ position: "relative" }}>
									<Regalos />
								</Element>
							</Grid>
							<Grid item>
								<Element
									name='contactUs'
									style={{ position: "relative" }}
									ref={contactUsRef}>
									<Footer
										handlePageChange={handlePageChange}
										currentPage={currentPage}
									/>
								</Element>
							</Grid>
						</ReactPageScroller>
					</Grid>
				</div>
			</>
		);
	}
};

export default LandingPage;
