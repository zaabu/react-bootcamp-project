import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import { LOGIN_URL } from "../../appUrls/index"
import axios from "axios";
import userReducer from "../../reducers/userReducer";
import loginAction from "../../actions/auth/loginAction";



let store;
let mock;


describe("login actions", () => {
    beforeEach(() => {
        configureMock();

    });
    it("login user", () => {
        mock.onPost(LOGIN_URL).reply(201,{});
        loginAction({})(store.dispatch);
    });
    it("login user error", () => {
        mock.onPost(LOGIN_URL).reply(404, {});
        loginAction({})(store.dispatch);
    });
});

function configureMock() {
    mock = new MockAdapter(axios);
    const mockStore = configureMockStore();
    store = mockStore({})
}

describe("test login reducer", () => {
    const initialState = {
        user: {},
        // isLoggedIn: false
    };
    beforeEach(() => {
        configureMock();

    });
    it("it should login user", () => {
        expect(
            userReducer(initialState, {
                type: "LOGIN",
                payload: {}
            })
        ).toEqual({
            user: {},
            // isLoggedIn: true
        })
    })
})