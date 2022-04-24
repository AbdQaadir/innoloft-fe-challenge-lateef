import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../../axios";

export const fetchConfigurations = createAsyncThunk(
  "configurations/fetchConfigurations",
  async (parr, thunkAPI) => {
    try {
      const appID = process.env.REACT_APP_APP_ID || 1;
      const response = await axiosInstance.get(`/configuration/${appID}/`);

      return response.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }

      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

type Configuration = {
  id: number;
  logo: string;
  mainColor: string;
  hasUserSection: boolean;
};
type ConfigurationType = {
  isLoading: boolean;
  error: string | undefined;
  configuration: Configuration;
};

const initialState: ConfigurationType = {
  isLoading: false,
  error: "",
  configuration: {} as Configuration,
};
const configurationSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {},
  extraReducers: (builders) =>
    builders
      .addCase(fetchConfigurations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchConfigurations.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.configuration = action.payload;
        }
      )
      .addCase(fetchConfigurations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      }),
});

export default configurationSlice.reducer;
