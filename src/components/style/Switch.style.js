import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import { styled } from "@mui/system";

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "current",
})(({ current }) => ({
  color: "black",
  backgroundColor: current ? "rgba(0, 0, 0, 0.23)" : "white",
  "&.MuiButtonGroup-grouped:not(:last-of-type) ": {
    borderColor: "black",
  },
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.23)",
  },
}));

export const StyledButtonGroup = styled(ButtonGroup)({
  borderColor: "black",
});
