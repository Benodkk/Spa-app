import { useSelector } from "react-redux";

import { StyledButton, StyledButtonGroup } from "./style/Switch.style";

const SwitchPage = ({ setPage, page }) => {
  const store = useSelector((state) => state.actualPageData);

  const pageDown = () => {
    if (page > 1) setPage(page - 1);
  };

  const pageUp = () => {
    if (page < store.total_pages) setPage(page + 1);
  };

  const handleClick = (x) => {
    setPage(x);
  };

  const createButtons = (totalPages, handleClick) => {
    let buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i > page - 3 && i < page + 3) {
        buttons.push(
          <StyledButton
            current={page === i ? true : false}
            key={i}
            onClick={() => handleClick(i)}
          >
            {i}
          </StyledButton>
        );
      }
    }
    return buttons;
  };

  return (
    <StyledButtonGroup variant="text">
      <StyledButton onClick={pageDown}>{"<"}</StyledButton>
      {createButtons(store.total_pages, handleClick)}
      <StyledButton onClick={pageUp}>{">"}</StyledButton>
    </StyledButtonGroup>
  );
};

export default SwitchPage;
