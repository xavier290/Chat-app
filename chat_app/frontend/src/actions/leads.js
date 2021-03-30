import axios from "axios";
import { GET_LEADS } from "./type";

// Get Leads

export const getLeads = () => (dispatch) => {
  axios
    .get("/api/Frontend_server/")
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
