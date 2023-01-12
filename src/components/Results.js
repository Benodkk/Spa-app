import { useState } from "react";

import Module from "./Module";

import { TableBody, TableHead, TableRow } from "@mui/material";
import {
  StyledTable,
  StyledTableCell,
  StyledTableRow,
  StyledTableHeadCell,
} from "./style/Table.style";

const Results = ({ results }) => {
  const [visible, setVisible] = useState(false);
  const [module, setModule] = useState("");

  const showModule = (element) => {
    setVisible(true);
    setModule(element);
  };

  return (
    <div>
      <Module result={module} visible={visible} setVisible={setVisible} />
      <StyledTable>
        <TableHead>
          <TableRow>
            <StyledTableHeadCell>ID:</StyledTableHeadCell>
            <StyledTableHeadCell>Name:</StyledTableHeadCell>
            <StyledTableHeadCell>Year:</StyledTableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((element) => {
            return (
              <StyledTableRow
                sx={{ bgcolor: element.color }}
                key={element.id}
                onClick={() => showModule(element)}
              >
                <StyledTableCell>{element.id}</StyledTableCell>
                <StyledTableCell>{element.name}</StyledTableCell>
                <StyledTableCell>{element.year}</StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </StyledTable>
    </div>
  );
};

export default Results;
