import { createStore } from "redux";

const initialState = {
  value: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "add":
      return { ...state, value: state.value + 1 };
    case "remove":
      return { ...state, value: state.value - 1 };
  }
}
const store = createStore(reducer);
export default store;