import axios from 'axios';
import { IHeatMap } from '../interfaces/heatmap.interface';

const baseURL =  import.meta.env.SNOWPACK_PUBLIC_SNOWPACK_PUBLIC_REACT_APP_API_URL;

export const fetchHeatMap = async () => {
    const url = `${baseURL}/api/HeatMap`;

    return await axios
      .get<IHeatMap>(url)
      .then (response => {
        return {
          response,
        };
      })
      .catch (error => {
        throw error;
      });
}
