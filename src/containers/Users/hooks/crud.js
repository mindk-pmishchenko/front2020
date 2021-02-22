import {apiClient} from "../../../config/axios";

export const getUsers = async (params) => {
   const stringParams = `ID=${params.id}`;
   return apiClient.get(`?${stringParams}`);
};

export const createUserRequest = async (data) => {
   return apiClient.post(`/`, data);
};