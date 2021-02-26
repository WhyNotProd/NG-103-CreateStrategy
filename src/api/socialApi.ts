import axios from 'axios';
import { ISocialPost } from '../interfaces/socialPost.interface';

const baseURL =  import.meta.env.SNOWPACK_PUBLIC_SNOWPACK_PUBLIC_REACT_APP_API_URL;

export const fetchPosts = async () => {
    const url = `${baseURL}/api/UserShareManagement`;

    return await axios
      .get<ISocialPost>(url)
      .then (response => {
        return {
          response,
        };
      })
      .catch (error => {
        throw error;
      });
}

export const removePost = async (id) => {
    const url = `${baseURL}/api/UserShareManagement/${id}`;

    return await axios
      .delete<ISocialPost>(url)
      .then (response => {
        return {
          response,
        };
      })
      .catch (error => {
        throw error;
      });
}
