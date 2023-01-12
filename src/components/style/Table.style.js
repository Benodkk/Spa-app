import { Table, TableCell, TableRow } from "@mui/material";
import { styled } from "@mui/system";

export const StyledTable = styled(Table)({
  tableLayout: "fixed",
});

export const StyledTableHeadCell = styled(TableCell)({
  fontWeight: 700,
  textAlign: "center",
});

export const StyledTableCell = styled(TableCell)({
  textAlign: "center",
});

export const StyledTableRow = styled(TableRow)({
  cursor: "pointer",
  "&:hover": {
    filter: "brightness(80%)",
  },
});
