import { Grid, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { Link } from "react-scroll";
import { footerSection } from "../../data/footerSection";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    background: "#68030F",
    fontFamily: "HeadingFont",
    color: "white",
    height: "100vh",
  },
  container: {
    backgroundImage: `url(${footerSection.bg.bg})`,
    backgroundSize: "100% 100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "40px",
  },
  menu: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "15px",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  sectionContent: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuItem: {
    fontFamily: "HeadingFont",
    color: "#ECC878",
    textDecoration: "none",
    letterSpacing: "1.3px",
    fontSize: "18px",
    margin: "0 20px 25px 20px",
    display: "block",
    "&:last-child": {
      marginBottom: "0px",
    },
    "&:hover": {
      fontFamily: "HeadingFontBold",
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: "0px",
      letterSpacing: "1.1px",
    },
  },
  secondColumn: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    maxWidth: "250px",
    marginBottom: "50px",
  },
  copyright: {
    fontFamily: "HeadingFontBold",
    fontWeight: 700,
    color: "#c0882f50",
    fontSize: "14px",
    marginTop: "30px",
  },
}));

export const currentYear = new Date().getFullYear();
export interface Props {
  handlePageChange: any;
  currentPage: number;
}
const Footer = ({ handlePageChange, currentPage }: Props) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid
            className={classes.sectionContent}
            container
            direction="row"
            spacing={2}
          >
            <Grid container justifyContent="center" alignItems="center">
              <Link
                activeClass="active"
                to="header"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => handlePageChange(0)}
                onFocus={() => void 0}
                aria-hidden="true"
              >
                <span>
                  <img
                    src={footerSection.icons.gif}
                    alt="contactUs"
                    className={classes.logo}
                  />
                </span>
              </Link>
              <Grid
                container
                direction="column"
                className={classes.secondColumn}
              >
                <Grid item className={`${classes.menu} w-p-100`}>
                  {footerSection.pages.map((page) => (
                    <Link
                      key={page.key}
                      style={{ marginBottom: "5px" }}
                      activeClass="active"
                      to={page.key}
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      onClick={() => handlePageChange(page.page)}
                      onFocus={() => void 0}
                      aria-hidden="true"
                    >
                      <span className={classes.menuItem}>{page.value}</span>
                    </Link>
                  ))}
                </Grid>

                <Grid item className={"w-p-100"}>
                  <p className={classes.copyright}>
                    ©{currentYear} - Develop by Esteban Burgos - All Rights
                    Reserved.
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Footer;
