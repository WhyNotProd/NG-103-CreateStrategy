import { createSlice, createAsyncThunk, createEntityAdapter, PayloadAction } from '@reduxjs/toolkit';
import { fetchHeatMap } from '../../api/heatMapApi';


export interface HeatMapState {
  heatmapData: object[],
  loading: boolean,
  errors: string
}

const initialState: HeatMapState = {
  heatmapData: [],
  loading: false,
  errors: ''
}

export const getHeatMap = createAsyncThunk('heatmap/getHeatMap', async () => {
	const {response} = await fetchHeatMap();

	return response.data;
});

const heatMapSlice = createSlice({
	name: 'heatmap',
	initialState,
	reducers: {
	},
  extraReducers: {
    [getHeatMap.pending.toString()]: (state, action) => {
      state.loading = true
    },
    [getHeatMap.fulfilled.toString()]: (state, { payload }) => {
      state.heatmapData = payload
      state.loading = false
    },
    [getHeatMap.rejected.toString()]: (state, { payload }) => {
      state.loading = false
      state.errors = payload
    },
  },
});

export default heatMapSlice.reducer;

