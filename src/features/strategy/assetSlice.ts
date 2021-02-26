import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
  PayloadAction
} from '@reduxjs/toolkit';
import axios from 'axios';
import {apiFetchAssetById, apiFetchAssets} from '../../api/assetApi';
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
    isLoading: false,
    assets: [],
    error: null,
  };
  
  const startLoading = (state:IAssetState) => {
    state.isLoading = true;
  };
  
  const loadingFailed = (state:IAssetState, action:PayloadAction<string>) => {
    state.isLoading = false;
    state.error = action.payload;
  };

  // export const fetchAssets = createAsyncThunk(('assets/fetchAssets', async () => {
  //   const response = await apiFetchAssets ();
  //   return response;
  // });
  
  const assetsSlice = createSlice ({
    name: 'asset',
    initialState,
    reducers: {
      getAssetStart: startLoading,
      getAssetSuccess (state, {payload}) {
        // const {stock} = payload;
        state.isLoading = false;
        state.assets = payload;
        state.error = null;
      },
      getAssetFailure: loadingFailed,
    },
  });
  
  export const {
    getAssetStart,
    getAssetSuccess,
    getAssetFailure,
  } = assetsSlice.actions;
  
  export default assetsSlice.reducer;
  
  // export const fetchAssets = input => async dispatch => {
  //   try {
  //     dispatch (getAssetStart ());
  //     const {stock} = await apiFetchAssetById (input);
  //     dispatch (getAssetSuccess (stock.data));
  //   } catch (err) {
  //     dispatch (getAssetFailure (err.toString ()));
  //   }
  // };
  