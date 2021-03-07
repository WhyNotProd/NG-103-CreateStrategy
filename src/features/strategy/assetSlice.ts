import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
  PayloadAction
} from '@reduxjs/toolkit';
import axios from 'axios';
import {fetchAssetById, fetchAssets} from '../../api/assetApi';
import { IAsset } from '../../interfaces/asset.interface';

  interface IAssetState {
    isLoading?: boolean;
    assets: IAsset[];
    error?: string | null;
  }

  interface IAssetSuccessPayload {
    assets: IAsset[];
  }

  const initialState = {
    loading: false,
    assets: [],
    errors: '',
  };
  
  export const getAssets = createAsyncThunk('strategy/assets/getAssets', async () => {
    const { response } = await fetchAssets();
  
    return response.data;
  });
  
  const assetSlice = createSlice({
    name: 'strategy/assets',
    initialState,
    reducers: {
    },
    extraReducers: {
      [getAssets.pending.toString()]: (state) => {
        state.loading = true;
      },
      [getAssets.fulfilled.toString()]: (state, { payload }) => {
        state.assets = payload;
        state.loading = false;
      },
      [getAssets.rejected.toString()]: (state, { payload }) => {
        state.loading = false;
        state.errors = payload;
      },
    },
  });

  export default assetSlice.reducer;