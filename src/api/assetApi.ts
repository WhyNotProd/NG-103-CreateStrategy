import axios from 'axios';
import { IAsset } from '../interfaces/asset.interface';

const baseURL =  import.meta.env.SNOWPACK_PUBLIC_SNOWPACK_PUBLIC_REACT_APP_API_URL;

export const fetchAssets = async () => {
    const url = `${baseURL}/api/AssetManagement/0`;
  
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

export const fetchAssetById = async (id:number) => {
    const url = `${baseURL}/api/AssetManagement/${id}`;
  
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