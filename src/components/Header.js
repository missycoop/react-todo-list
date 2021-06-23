//importing from React
import React from "react";

//creating a Header component which takes one param - props
const Header = (props) => {
  return (
    //fetching styles from the variable created below
    <div>
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};

//creating a new object with styles for the component
const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
};

export default Header;
