import { Container } from "@mui/material";
import { styled } from "@mui/system";

export const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "70vh",
});

export const StyledUpperContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
});
