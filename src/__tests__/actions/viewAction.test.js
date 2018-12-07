import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import { BASE_URL, LOGIN_URL, SIGNUP_URL, RETRIEVE_ALL } from "../../appUrls";
import entriesReducer from "../../reducers/entriesReducer/entryReducer";
import axios from "axios";

import {
  retrieveAllEntries,
  createDiaryEntry,
  deleteDiaryEntry,
  updateDiaryEntry
} from "../../actions/entryActions/entryAction";

let store;
let mock;
let id = 1;
const data = {};

describe("view all entries actions", () => {
  beforeEach(() => {
    configureMock();
  });
  it("view all entries", () => {
    mock.onGet(BASE_URL).reply(200, {});
    retrieveAllEntries({})(store.dispatch);
    expect(store.getActions()).toEqual([]);
  });
  it("view entries error", () => {
    mock.onGet(BASE_URL).reply(404, {});
    retrieveAllEntries({})(store.dispatch);
    expect(store.getActions()).toEqual([]);
  });
  it("create entries ", () => {
    mock.onPost(BASE_URL).reply(201, {});
    createDiaryEntry({})(store.dispatch);
    expect(store.getActions()).toEqual([]);
  });
  it("create entries fail", () => {
    mock.onPost(BASE_URL).reply(403, {});
    createDiaryEntry({})(store.dispatch);
    expect(store.getActions()).toEqual([]);
  });
  it("delete entries ", () => {
    mock.onDelete(BASE_URL + `/api/v1/entries/${id}`).reply(200, {});
    deleteDiaryEntry(id)(store.dispatch);
    expect(store.getActions()).toEqual([]);
  });
  it("delete entries fail", () => {
    mock.onDelete(BASE_URL + `/api/v1/entries/${id}`).reply(404, {});
    deleteDiaryEntry(id)(store.dispatch);
    expect(store.getActions()).toEqual([]);
  });
  it("modify entries ", () => {
    mock.onPut(BASE_URL + `/api/v1/entries/${id}`).reply(200, {});
    updateDiaryEntry(id, data)(store.dispatch);
    expect(store.getActions()).toEqual([]);
  });
  it("modify entries failure", () => {
    mock.onPut(BASE_URL + `/api/v1/entries/${id}`).reply(403, {});
    updateDiaryEntry(id, data)(store.dispatch);
    expect(store.getActions()).toEqual([]);
  });
});
function configureMock() {
  mock = new MockAdapter(axios);
  const mockStore = configureMockStore();
  store = mockStore({});
}

describe("entries reducer ", () => {
  const initialState = {
    entries: [],
    entry: {},
    deleted: {},
    modified: {}
  };
  const action = type => {
    return {
      type: type,
      payload: []
    };
  };
  it("new entry to be added", () => {
    expect(entriesReducer(initialState, action("CREATE_DIARY_ENTRY"))).toEqual({
      deleted: {},
      entries: [],
      entry: [],
      modified: {}
    });
  });
  it("all entries to be returned", () => {
    expect(entriesReducer({}, action("GET_DIARY_ENTRIES"))).toEqual({ entries: [] });
  });
  it("entry to be fetched", () => {
    expect(entriesReducer({}, action("VIEW_SINGLE_ENTRY"))).toEqual({
      singleEntry: []
    });
  });
  it("entry to be deleted", () => {
    expect(entriesReducer({}, action("DELETE_SINGLE_ENTRY"))).toEqual({
      deleted: []
    });
  });
  it("entry to be modified", () => {
    expect(entriesReducer({}, action("MODIFY_SINGLE_ENTRY"))).toEqual({ modified: [] });
  });
});