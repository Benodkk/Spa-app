import { createStore } from "redux";

const initialState = {
  actualPageData: [],
  singleResult: {},
};

function setData(data) {
  return {
    type: "setData",
    payload: data,
  };
}

function setSingleResult(data) {
  return {
    type: "setSingleResult",
    payload: data,
  };
}

export { setData, setSingleResult };

function reducer(state = initialState, action) {
  switch (action.type) {
    case "setData":
      return { ...state, actualPageData: action.payload };
    case "setSingleResult":
      return { ...state, singleResult: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);

export { store };
