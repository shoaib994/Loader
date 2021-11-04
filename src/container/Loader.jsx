import React from "react";
import classes from "./Loader.module.css";
const Loader = (props) => {
  if (!props.children) {
    return (
      <div className={classes.nData}>
        <div className={classes.data}></div>
      </div>
    );
  }
  return (
    <div>
      <h3>Loader</h3>
      {props.children}
    </div>
  );
};

export default Loader;
