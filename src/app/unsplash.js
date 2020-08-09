import Axios from "axios";

 export default Axios.create(
    {
        baseURL: 'https://api.unsplash.com',
        headers: {
            Authorization: "Client-ID B9-8fGMMlWiTmrQBsaZTJp5yb7ZCAcbcG9tMQIrJ_rA",
        }
    }
);


