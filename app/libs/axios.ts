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

export const authservice = createApi(
    "http://localhost:8000/api/v1"
);

