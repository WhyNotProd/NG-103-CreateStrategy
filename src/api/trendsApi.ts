import axios from 'axios';

const baseURL =  import.meta.env.SNOWPACK_PUBLIC_SNOWPACK_PUBLIC_REACT_APP_API_URL;

interface ITrendDataPayload {
  assets: string[],
  endDate: Date,
  startDate: Date
}

export const fetchTrends = async () => {
    const url = `${baseURL}/api/ScoreManagement`;

    return await axios
      .get<object[]>(url)
      .then (response => {
        return {
          response,
        };
      })
      .catch (error => {
        throw error;
      });
}

export const fetchTrendData = async (payload:ITrendDataPayload) => {
  const url = `${baseURL}/api/Momentum`;

  return await axios
    .post<object>(url, payload)
    .then (response => {
      return {
        response,
      };
    })
    .catch (error => {
      throw error;
    });
}
