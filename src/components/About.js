import React from "react";
import user from "../data/user";
import Links from "./Links";

function About(props) {
  // console.log(props);
  if (props.bio) {
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{props.bio}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links github={props.github} linkedin={props.linkedin} />
        {/* <Links /> */}
      </div>
    );
  } else if (!props.bio || props.bio === "") {
    return (
      <div id="about">
        <h2>About Me</h2>

        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links github={props.github} linkedin={props.linkedin} />
        {/* <Links /> */}
      </div>
    );
  }
  // return (
  //   <div id="about">
  //     <h2>About Me</h2>
  //     <p>{props.bio}</p>
  //     <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
  //     <Links github={props.github} linkedin={props.linkedin} />
  //     {/* <Links /> */}
  //   </div>
  // );
}

export default About;
