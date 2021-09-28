import React from "react";
import classes from "./TeamInfo.module.css";

const TeamInfo = ({ team }) => {
  return (
    <div className={classes.profile}>
      <img src={team.profile}></img>
      <div className={classes.info}>
        <p>{team.job} </p>
        <h5>{team.name}</h5>
        <div className={classes.icons}>
          <a href={team.linkedin}>
            <i className={`fab  fa-instagram-square ${classes.i}`}></i>
          </a>
          <a href={team.linkedin}>
            <i className={`fab  fa-twitter-square ${classes.i}`}></i>
          </a>
          <a href={team.linkedin}>
            <i className={`fab  fa-linkedin ${classes.i}`}></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
