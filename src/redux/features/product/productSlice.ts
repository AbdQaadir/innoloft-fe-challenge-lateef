import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../../axios";
import {
  ProductDetailsType,
  ProductRootType,
} from "../../../pages/product-details/product.types";

export const fetchProductData = createAsyncThunk(
  "product/fetchProductData",
  async (productId: number | string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/product/${productId}/`);

      return response.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }

      return rejectWithValue(error.response.data);
    }
  }
);

export const updateProductData = createAsyncThunk(
  "/product/updateProductData",
  async (productData: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        `/product/${productData.productId}/`,
        productData
      );

      return response.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }

      return rejectWithValue(error.response.data);
    }
  }
);

const intialState: ProductRootType = {
  product: {} as ProductDetailsType,
  isLoading: true,
  error: null,
  isSuccess: false,
  submissionSuccess: false,
  isSubmitting: false,
  submissionError: null,
};

const productSlice = createSlice({
  name: "product",
  initialState: intialState,
  reducers: {
    getProduct: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state: ProductRootType, action) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(
        fetchProductData.fulfilled,
        (state: ProductRootType, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = null;
          state.isSuccess = true;
          state.product = action.payload;
        }
      )
      .addCase(fetchProductData.rejected, (state: ProductRootType, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.error = action.error.message;
      })
      .addCase(updateProductData.pending, (state) => {
        state.submissionError = null;
        state.submissionSuccess = false;
        state.isSubmitting = true;
      })
      .addCase(updateProductData.fulfilled, (state, action) => {
        state.isSubmitting = false;
        state.submissionError = null;
        state.submissionSuccess = true;
        state.product = action.payload;
      })
      .addCase(updateProductData.rejected, (state: ProductRootType, action) => {
        state.isSubmitting = false;
        state.submissionSuccess = false;
        state.submissionError = action.error.message;
      });
  },
});

export const { getProduct } = productSlice.actions;
export default productSlice.reducer;
