import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "126b8e28-ba2a-4f54-b0a5-94465bbda0ce",
  },
});

export const getUsersAPI = (currentPage, pageSize) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then((responce) => {
      return responce.data;
    });
};

export const getProfileAPI = (userId) => {
  return instance.get(`profile/${userId}`).then((responce) => {
    return responce.data;
  });
};

export const followAPI = (userId) => {
  return instance.post(`follow/${userId}`, {}).then((responce) => {
    return responce.data;
  });
};

export const unfollowAPI = (userId) => {
  return instance.delete(`follow/${userId}`).then((responce) => {
    return responce.data;
  });
};

export const authAPI = () => {
  return instance.get(`auth/me`).then((responce) => {
    return responce.data;
  });
};
