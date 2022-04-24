import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./layout/layout";
import Home from "./pages/home/home";
import Product from "./pages/product/product";
import ProductDetails from "./pages/product-details/product-details";
import { AppDispatch, RootState } from "./redux/store";
import { fetchConfigurations } from "./redux/features/configuration/configurationSlice";

function App() {
  const dispatch: AppDispatch = useDispatch();
  const { configuration } = useSelector(
    (state: RootState) => state.configuration
  );
  useEffect(() => {
    dispatch(fetchConfigurations());
    //eslint-disable-next-line
  }, []);

  // Set theme based on configuration
  const theme = {
    mainColor: configuration?.mainColor,
  };
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <AppLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="product">
                <Route index={true} element={<Product />} />
                <Route path=":id" element={<ProductDetails />} />
              </Route>
            </Routes>
          </AppLayout>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
