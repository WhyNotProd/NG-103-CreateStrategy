import axios from 'axios';
import { IAsset } from '../interfaces/asset.interface';

const { SNOWPACK_PUBLIC_REACT_APP_API_URL } = import.meta.env;

export const apiFetchAssets = async () => {
    const url = `${SNOWPACK_PUBLIC_REACT_APP_API_URL}/api/AssetManagement/0`;
  
    return await axios
      .get<IAsset>(url)
      .then (response => {
        return {
          response,
        };
      })
      .catch (error => {
        throw error;
      });
  };

export const apiFetchAssetById = async (id:number) => {
    const url = `${SNOWPACK_PUBLIC_REACT_APP_API_URL}/api/AssetManagement/${id}`;
  
    return await axios
      .get<IAsset>(url)
      .then (response => {
        return {
          response,
        };
      })
      .catch (error => {
        throw error;
      });
  };