import {
    createSlice,
    createAsyncThunk,
  } from '@reduxjs/toolkit';
import { fetchStrategies } from '../../api/strategyApi';

const initialState = {
  loading: false,
  strategies: [],
  errors: '',
};

export const getStrategies = createAsyncThunk('strategy/strategies/getStrategies', async () => {
  const { response } = await fetchStrategies();

  return response.data;
});

const strategySlice = createSlice({
  name: 'strategy/strategies',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getStrategies.pending.toString()]: (state) => {
      state.loading = true;
    },
    [getStrategies.fulfilled.toString()]: (state, { payload }) => {
      state.strategies = payload;
      state.loading = false;
    },
    [getStrategies.rejected.toString()]: (state, { payload }) => {
      state.loading = false;
      state.errors = payload;
    },
  },
});

export default strategySlice.reducer;