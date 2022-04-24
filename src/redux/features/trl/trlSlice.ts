import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import axiosInstance from "../../../axios";

type TRLType = {
  id: string;
  name: string;
  desription: null | string;
};

type TRLOptionsType = {
  trl: TRLType[];
  isLoading: boolean;
  error: null | string;
};
const initialState: TRLOptionsType = {
  trl: [] as TRLType[],
  isLoading: true,
  error: null,
};

export const getTRLOptions = createAsyncThunk("get/trl", async () => {
  try {
    const response = await axiosInstance.get("/trl/");
    return response.data;
  } catch (error: any) {
    if (!error.response) {
      throw error;
    }
    return error.response.data;
  }
});

const trlSlice = createSlice({
  name: "trl",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTRLOptions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTRLOptions.fulfilled, (state, action) => {
      state.trl = action.payload;
      state.isLoading = false;
    });
    builder.addCase(
      getTRLOptions.rejected,
      (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.isLoading = false;
      }
    );
  },
});

export default trlSlice.reducer;
