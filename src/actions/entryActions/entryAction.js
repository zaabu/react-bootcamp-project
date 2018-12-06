import { RETRIEVE_ALL } from "../../appUrls";
import ENTRIES from "../actionTypes";
import { headers } from "../../utils/myHeaders";
import { toast } from "react-toastify";
import axios from "axios";

export const retrieveAllEntries = () => dispatch => {
    return axios
        .get(RETRIEVE_ALL, headers())
        .then(res => {
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

export const deleteDiaryEntry = id => dispatch => {
    return axios
        .delete(RETRIEVE_ALL + `/${id}`, headers())
        .then(res => {
            console.log("deleteAction",res.data)
            toast.success(res.data.message, {
                autoClose: 3500,
                hideProgressBar: true
            });
            dispatch({
                type: ENTRIES.DELETE_SINGLE_ENTRY,
                payload: res.data
            });
        })
        .catch(error => {
            console.log("deleteAction no",error.data)
            toast.error(error, {autoClose: 3500, hideProgressBar: true})
        });
};

export const updateDiaryEntry = (id, data) => dispatch => {
    return axios 
        .put(RETRIEVE_ALL + `${id}`, headers())
        .then(res => {
            toast.success(res.data.Message, {
                autoClose: 3500,
                hideProgressBar: true
            });
            dispatch({
                type: ENTRIES.MODIFY_SINGLE_ENTRY,
                payload: res.data
            });
        })
        .catch(error => {
            toast.error("Failed to update entry", {
              autoClose: 5000,
              hideProgressBar: true
            });
        });
        
}

export const createDiaryEntry = data => dispatch => {
    return axios 
        .post(RETRIEVE_ALL, data, headers())
        .then(res => {
            toast.success(res.data.Message, {
                autoClose: 3500,
                hideProgressBar: true 
            });
            dispatch ( {
                type: ENTRIES.CREATE_DIARY_ENTRY,
                payload: res.data
            });
        })
        .catch(error => {
            toast.error("Failed to create diary entry, please check your fields", {
                autoClose: 3500,
                hideProgressBar: true
            });
        });
}
