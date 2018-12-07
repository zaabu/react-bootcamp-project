import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import { SIGNUP_URL } from "../../appUrls/index";
import userReducer from "../../reducers/userReducer";
import axios from "axios";
import { signup } from "../../actions/auth/signupAction"

let store;
let mock;

// describe("signup actions", () => {
//     beforeEach(() => {
//         configureMock()
//     });
//     it("sign up", () => {
//         mock.onPost(SIGNUP_URL).reply(201, {});
//         signup({})(store.dispatch);
//     });
//     it("sign up error", () => {
//         mock.onPost(SIGNUP_URL).reply(400, {});
//         signup({})(store.dispatch);
//     });
// });

function configureMock() {
    mock = new MockAdapter(axios);
    const mockStore = configureMockStore();
    store = mockStore({});
}

describe("test login reducer", () => {
    const initialState = {
        user: {}
    };
    beforeEach(() => {
        configureMock()
    });
    it("it should signup user", () => {
        expect(
            userReducer(initialState, {
                type: "SIGNUP",
                payload: {},
                // status: payload.status
            })
        ).toEqual({
            "signup": {},
            "status": undefined,
            "user": {}
            // user: {},
            // status: payload.status

        });
    });
});