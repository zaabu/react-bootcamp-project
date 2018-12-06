import ENTRIES from "../../actions/actionTypes";

const initialState = {
  entries: [],
  entry: {},
  deleted: {},
  modified:{},
  
};

const entriesReducer = (state = initialState, action) => {
  switch (action.type) {
  case ENTRIES.CREATE_DIARY_ENTRY:
    return {
      ...state,
      entry: action.payload
    }
  case ENTRIES.GET_DIARY_ENTRIES:
    return {
      ...state,
      entries: action.payload,
    };
  case ENTRIES.VIEW_SINGLE_ENTRY:
    return {
      ...state,
      singleEntry: action.payload
    };
  case ENTRIES.DELETE_SINGLE_ENTRY:
    return {
      ...state,
      deleted: action.payload
    };
  case ENTRIES.MODIFY_SINGLE_ENTRY:
    return {
      ...state,
      modified: action.payload
    }
  default:
    return state;
  }
};

export default entriesReducer;
