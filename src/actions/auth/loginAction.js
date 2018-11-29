import { LOGIN } from "../actionTypes";
import axios from "axios";
import { LOGIN_URL } from "../../appUrls";
import { toast } from "react-toastify"

const loginAction = data => dispatch => {
  return axios
    .post(LOGIN_URL, data)
    .then(res => {
      console.log("aaa", res.data.token)
      dispatch({
        type: LOGIN,
        payload: res.data,
        isLoggedIn: true
      });
      localStorage.setItem("token",res.data.token)
      localStorage.setItem('isLoggedIn', true);
      window.location.replace('/view-entries');
      toast.success(" You have logged in succesfully", { autoClose: 3500, hideProgressBar: true });
    })
    .catch(error => {
      toast.error("Invalid user details, check email or password",
       { autoClose: 3500, hideProgressBar: true });
    });
};
export default loginAction;
