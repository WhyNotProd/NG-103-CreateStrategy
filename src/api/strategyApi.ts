import axios from 'axios';
// import { IAsset } from '../interfaces/asset.interface';

const baseURL =  import.meta.env.SNOWPACK_PUBLIC_SNOWPACK_PUBLIC_REACT_APP_API_URL;

export const fetchStrategies = async () => {
    const url = `${baseURL}/api/PortfolioManagement/0?UserID=1`;
  
    return await axios
      .get(url)
      .then (response => {
        return {
          response,
        };
      })
      .catch (error => {
        throw error;
      });
  };

export const fetchStrategyById = async (id:number) => {
    const url = `${baseURL}/api/PortfolioManagement/${id}`;
  
    return await axios
      .get(url)
      .then (response => {
        return {
          response,
        };
      })
      .catch (error => {
        throw error;
      });
  };