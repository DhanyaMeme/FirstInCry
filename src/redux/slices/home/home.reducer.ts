import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchData } from "../../../services/axios";
import { homeService } from "../../../services/axiosServices";
import { IProduct } from "../collection/collection.type";
import { ICollection, IHomeState, IShopByProduct } from "./home.type";

export const fetchShopByCollectionAsync = createAsyncThunk<Array<ICollection>>(
  "home/getCollection",
  async (_arg, { rejectWithValue }) => {
    try {
      const response = (await fetchData(
        homeService.getShopByCollection
      )) as ICollection[];
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchShopByPdtsAsync = createAsyncThunk<Array<IShopByProduct>>(
  "home/getShopByCollection",
  async (_arg, { rejectWithValue }) => {
    try {
      const response = (await fetchData(
        homeService.getShopByProducts
      )) as IShopByProduct[];
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchHotAsync = createAsyncThunk<Array<IProduct>>(
  "home/getHot",
  async (_arg, { rejectWithValue }) => {
    try {
      const response = (await fetchData(
        homeService.getProductsHot
      )) as IProduct[];
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchFeaturePdtsAsync = createAsyncThunk<Array<IProduct>>(
  "home/getFeature",
  async (_arg, { rejectWithValue }) => {
    try {
      const response = (await fetchData(
        homeService.getFeatureProducts
      )) as IProduct[];
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const homeReducer = {};

export const extraHomeReducer = {
  [fetchShopByCollectionAsync.pending.type]: (state: IHomeState) => {
    state.shopByCollection.loading = true;
  },
  [fetchShopByCollectionAsync.fulfilled.type]: (
    state: IHomeState,
    { payload }: PayloadAction<Array<ICollection>>
  ) => {
    state.shopByCollection.loading = false;
    state.shopByCollection.data = payload;
  },
  [fetchShopByCollectionAsync.rejected.type]: (state: IHomeState) => {
    state.shopByCollection.loading = false;
    state.shopByCollection.error = "Error while fetching collection data";
  },
  [fetchShopByPdtsAsync.pending.type]: (state: IHomeState) => {
    state.shopByProducts.loading = true;
  },
  [fetchShopByPdtsAsync.fulfilled.type]: (
    state: IHomeState,
    { payload }: PayloadAction<Array<IShopByProduct>>
  ) => {
    state.shopByProducts.loading = false;
    state.shopByProducts.data = payload;
  },
  [fetchShopByPdtsAsync.rejected.type]: (state: IHomeState) => {
    state.shopByProducts.loading = false;
    state.shopByProducts.error = "Error while fetching shopby products data";
  },
  [fetchHotAsync.pending.type]: (state: IHomeState) => {
    state.hotProducts.loading = true;
  },
  [fetchHotAsync.fulfilled.type]: (
    state: IHomeState,
    { payload }: PayloadAction<Array<IProduct>>
  ) => {
    state.hotProducts.loading = false;
    state.hotProducts.data = payload;
  },
  [fetchHotAsync.rejected.type]: (state: IHomeState) => {
    state.hotProducts.loading = false;
    state.hotProducts.error = "Error while fetching collection data";
  },
  [fetchFeaturePdtsAsync.pending.type]: (state: IHomeState) => {
    state.featureProducts.loading = true;
  },
  [fetchFeaturePdtsAsync.fulfilled.type]: (
    state: IHomeState,
    { payload }: PayloadAction<Array<IProduct>>
  ) => {
    state.featureProducts.loading = false;
    state.featureProducts.data = payload;
  },
  [fetchFeaturePdtsAsync.rejected.type]: (state: IHomeState) => {
    state.featureProducts.loading = false;
    state.featureProducts.error = "Error while fetching feature data";
  },
};
