import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

import {baseURL} from "../configs";

const apiService = axios.create({baseURL});

export type IRes<T> = Promise<AxiosResponse<T>>

apiService.interceptors.request.use((config: AxiosRequestConfig) => {
    const newConfig = { ...config };
    newConfig.headers = {
        ...newConfig.headers,
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTY4YTllZTBkMGRjNzk5ODQwNTVmYjE5MzY3NTY3ZCIsInN1YiI6IjYzZWY0NTI3MzU4MThmMDA4NWU5ZGQ1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y9HlwpADafyRwclZvcVUg1nZD8ZcDYsauEnueyegbLk`,
    };
    return newConfig;
});

export {
    apiService,
};
