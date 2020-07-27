import React from "react";
import { Paper } from "@material-ui/core";

const SimplePaper = (props) => {
  return <Paper elevation={0} square {...props} />;
};

export default SimplePaper;
