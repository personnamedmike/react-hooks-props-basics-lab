import React from "react";
import user from "../data/user";

function Links(props) {
  //   console.log(props);
  return (
    <>
      <h3>Links</h3>
      <a href={props.github}>{user.links.github}</a>
      <a href={props.linkedin}>{user.links.linkedin}</a>
    </>
  );
}

export default Links;
