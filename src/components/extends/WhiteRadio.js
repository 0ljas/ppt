import React from "react";
import { Radio } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const WhiteRadio = withStyles({
  root: {
    color: "rgba(255, 255, 255)",
    "&$checked": {
      color: "rgba(255, 255, 255)",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default WhiteRadio;
