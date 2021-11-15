import axios from "axios";

const BASE_URL = "https://makecom.herokuapp.com/api/"

var TOKEN = "";


if((JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser) !== null){
    TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
}


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});