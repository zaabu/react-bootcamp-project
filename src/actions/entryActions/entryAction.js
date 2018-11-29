import { RETRIEVE_ALL } from "../../appUrls";
import ENTRIES from "../actionTypes";
import { headers } from "../../utils/myHeaders";
import { toast } from "react-toastify";
import axios from "axios";

export const retrieveAllEntries = () => dispatch => {
    return axios
        .get(RETRIEVE_ALL, headers())
        .then(res => {
            console.log("jhgfffffff",res.data)
            const getallentries = {
                type: ENTRIES.GET_DIARY_ENTRIES,
                payload: res.data
            };
            dispatch(getallentries);
        })
        .catch(error => {
            console.log("jhgfffffff",error.data)
            toast.error(error, { autoClose: 3500, hideProgressBar: true });
        });
}