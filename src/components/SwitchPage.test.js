import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render, fireEvent, screen } from "@testing-library/react";
import SwitchPage from "./SwitchPage";

const mockStore = configureMockStore();
const store = mockStore({ actualPageData: { total_pages: 3, page: 2 } });

test("handleClick function sets the correct page number", () => {
  const setPage = jest.fn();

  render(
    <Provider store={store}>
      <SwitchPage setPage={setPage} page={2} />
    </Provider>
  );

  fireEvent.click(screen.getByText("3"));

  expect(setPage).toHaveBeenCalledWith(3);
});

test("pageDown and pageUp methods", () => {
  const setPage = jest.fn();
  render(
    <Provider store={store}>
      <SwitchPage setPage={setPage} page={2} />
    </Provider>
  );
  // Test the pageDown method
  fireEvent.click(screen.getByText("<"));
  expect(setPage).toHaveBeenCalledWith(1);

  // Test the pageUp method
  setPage.mockClear();
  fireEvent.click(screen.getByText(">"));
  expect(setPage).toHaveBeenCalledWith(3);
});
