import { Fragment } from "react";

import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <div className={classes.mainContainerWrapper}>
        <main className={`${classes.main} ${classes.mainEditor} mainContainer`}>
          {props.children}
        </main>
      </div>
    </Fragment>
  );
};

export default Layout;
