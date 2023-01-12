import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";

export const StyledModule = styled(Box, {
  shouldForwardProp: (prop) => prop !== "visible",
})(({ visible }) => ({
  zIndex: 1,
  position: "absolute",
  top: 0,
  left: 0,
  display: "flex",
  width: "100vw",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
  visibility: visible ? "visible" : "hidden",
  opacity: visible ? 1 : 0,
  transition: "opacity 0.5s",
}));

export const StyledModuleContent = styled("div")({
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "20px",
  backgroundColor: "white",
  borderRadius: "10px",
});

export const StyledCloseButton = styled(Button)({
  alignSelf: "flex-end",
  fontSize: "1rem",
  minWidth: 0,
  padding: 0,
  width: "40px",
  height: "40px",
  textAlign: "center",
  color: "black",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.23)",
  },
  "&:after": {
    content: '"x"',
  },
});

export const StyledBlackBG = styled("div")({
  width: "100vw",
  height: "100vh",
  position: "absolute",
  backgroundColor: "black",
  opacity: 0.6,
});
