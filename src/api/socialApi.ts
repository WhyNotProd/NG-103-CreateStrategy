import axios from 'axios';
import { ISocialPost } from '../interfaces/socialPost.interface';

const baseURL = import.meta.env.SNOWPACK_PUBLIC_SNOWPACK_PUBLIC_REACT_APP_API_URL;

export const createPost = async (data) => {
  const url = `${baseURL}/api/UserShareManagement`;

  return axios
    .post<ISocialPost>(url, JSON.stringify(data))
    .then((response) => ({
      response,
    }))
    .catch((error) => {
      throw error;
    });
};
export const fetchPosts = async () => {
  const url = `${baseURL}/api/UserShareManagement`;

  return axios
    .get<ISocialPost>(url)
    .then((response) => ({
      response,
    }))
    .catch((error) => {
      throw error;
    });
};

export const likeUserPost = async (userId: number, shareId: number) => {
  const url = `${baseURL}/api/ActivityManagement/like/${userId}
  ?userShareID=${shareId}`;

  return axios
    .post<ISocialPost>(url)
    .then((response) => ({
      response,
    }))
    .catch((error) => {
      throw error;
    });
};

export const unlikeUserPost = async (userId: number, shareId: number) => {
  const url = `${baseURL}/api/ActivityManagement/like/${userId}
  ?userShareID=${shareId}`;

  return axios
    .delete<ISocialPost>(url)
    .then((response) => ({
      response,
    }))
    .catch((error) => {
      throw error;
    });
};

export const removePost = async (id) => {
  const url = `${baseURL}/api/UserShareManagement/${id}`;

  return axios
    .delete<ISocialPost>(url)
    .then((response) => ({
      response,
    }))
    .catch((error) => {
      throw error;
    });
};
