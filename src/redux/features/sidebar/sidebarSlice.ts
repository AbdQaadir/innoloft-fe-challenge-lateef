import { createSlice } from "@reduxjs/toolkit";

export type SidebarType = {
  isMobileNavOpen: boolean;
};
const intialState: SidebarType = {
  isMobileNavOpen: false,
};

const sidebarSlice = createSlice({
  name: "product",
  initialState: intialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isMobileNavOpen = !state.isMobileNavOpen;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
