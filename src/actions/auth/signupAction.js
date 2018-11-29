import { SIGNUP } from "../actionTypes";
import axios from "axios";
import { SIGNUP_URL } from "../../appUrls";
import { toast } from "react-toastify"

const signup = data => dispatch => {
  return axios
    .post(SIGNUP_URL, data)
    .then(res => {
      dispatch({
        type: SIGNUP,
        payload: res.data
      });
      toast.success("Your accout has been created succesfully",
        { autoClose: 3500, hideProgressBar: true });
      console.log(res.data)
    })
    .catch(error => {
      console.log(error)
      toast.error(error.response.data.message,
       { autoClose: 3500, hideProgressBar: true });
    });
};
export default signup;