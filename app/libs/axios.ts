import axios from "axios";

const createApi = (baseURL:any) => {
    const api = axios.create({
        baseURL,
        withCredentials: true,
    });

    api.interceptors.request.use((config) => {
        const token = localStorage.getItem("ACCESS_TOKEN");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    });


    api.interceptors.response.use((response) => {
        console.log(response);
        return response;
    });


    return api;
};

export const Axios = createApi(
    "http://greenvally.localhost:8000/api/v1"
);

export const HospitalApi = createApi(
    "http://greenvally.localhost:9000/api/v1/hospital"
);