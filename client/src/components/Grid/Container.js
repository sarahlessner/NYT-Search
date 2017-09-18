import React from "react";

export const Container = ({ fluid, children }) =>
  <div style={{ "padding-left": "0 !important", "padding-right": "0 !important"}} className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>;
