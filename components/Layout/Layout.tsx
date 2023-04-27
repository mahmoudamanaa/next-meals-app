import React, { Fragment } from "react";
import classes from "./Layout.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: React.FC<{ children: any }> = (props) => {
  return (
    <Fragment>
      <div className={classes.container}>
        <Navbar />
        {props.children}
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
