import React from "react";
import classes from "./Cockpit.css";

const Cockpit = props => {
  let btnclass = "";
  if (props.showPerson) btnclass = classes.red;

  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>Testing My application</p>
      <button className={btnclass} onClick={props.clicked}>
        Toggle Person
      </button>
    </div>
  );
};

export default Cockpit;
