import React from "react";
import GSDC from "./GSDC";

const Navbar = ({ progress }) => {
  return (
    <div className="h-full w-full">
      <GSDC progress={progress} />
    </div>
  );
};

export default Navbar;
