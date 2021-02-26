import { createSlice, createAsyncThunk, createEntityAdapter, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchTrends, fetchTrendData } from '../../api/trendsApi';
// import { getAssetFailure, getAssetStart, getAssetSuccess } from '../'


export interface TrendState {
  trends: object[],
  trendData: object,
  loading: boolean,
  errors: string
}

interface ITrendDataPayload {
    assets: string[],
    endDate: Date,
    startDate: Date
  }
  

const initialState: TrendState = {
  trends: [],
  trendData: {},
  loading: false,
  errors: ''
}

export const getTrends = createAsyncThunk('trends/getTrends', async () => {
	const {response} = await fetchTrends();

	return response.data;
});

export const getTrendData = createAsyncThunk('trends/getTrendData', async (payload:ITrendDataPayload) => {
	const {response} = await fetchTrendData(payload);

	return response.data;
});

const trendsSlice = createSlice({
	name: 'trend',
	initialState,
	reducers: {
	},
  extraReducers: {
    [getTrends.pending.toString()]: (state, action) => {
      state.loading = true
    },
    [getTrends.fulfilled.toString()]: (state, { payload }) => {
      state.trends = payload
      state.loading = false
    },
    [getTrends.rejected.toString()]: (state, { payload }) => {
      state.loading = false
      state.errors = payload
    },
    [getTrendData.pending.toString()]: (state, action) => {
        state.loading = true
        },
    [getTrendData.fulfilled.toString()]: (state, { payload }) => {
    state.trendData = payload
    state.loading = false
    },
      [getTrendData.rejected.toString()]: (state, { payload }) => {
        state.loading = false
        state.errors = payload
      },
  },
});

export default trendsSlice.reducer;

