import { SELECT } from "../actions/selector";

const initialState = {
  selected: {
    id: 0,
    name: "None"
  }
}

export const selector = (state = initialState, action) => {
  switch (action.type) {
    case SELECT:
      return {
        ...state,
        selected: action.payload
      };
    default:
      return state;
  }
}