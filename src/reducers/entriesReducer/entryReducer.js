import ENTRIES from "../../actions/actionTypes";

const initialState = {
  entries: [],
};

const entriesReducer = (state = initialState, action) => {
  switch (action.type) {
  
  case ENTRIES.GET_DIARY_ENTRIES:
    return {
      ...state,
      entries: action.payload,
    };
  default:
    return state;
  }
};

export default entriesReducer;
