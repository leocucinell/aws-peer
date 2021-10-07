import axios from "axios";

const peerapi = axios.create({
    baseURL: "https://t8ev7k63q4.execute-api.us-east-1.amazonaws.com/",
});
export default peerapi;