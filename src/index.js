import React from "react";
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from "react-dom/client";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";

import "./index.scss";
import "./css/layerslider.css"
import "./css/classic-theme.css"
import "./css/global.css"
import "./css/extendify-utilities.css"
import "./css/styles.css"
import "./css/style.css"
import "./css/flaticon_plugin-plate-icons.css"
import "./css/custom-style.css"
import "./css/slick.css"
import "./css/perfect-scrollbar.min.css"
import "./css/custom-theme.css"
import "./css/magnific-popup.css"
import "./css/feather.css"
import "./css/frontend.css"
import "./css/webfont.min.css"
import "./css/elementor-icons.min.css"
import "./css/frontend-legacy.min.css"
import "./css/frontend.min.css"
import "./css/swiper.min.css"
import "./css/post-12.css"
import "./css/post-61.css"
import "./css/style_1.css"
import "./css/fontawesome.min_1.css"
import "./css/bootstrap.min.css"
import "./css/style_2.css"
import "./css/color.schemes.css"
import "./css/fontawesome.min.css"
import "./css/fonts.css"
import "./css/post-2106.css"
import "./css/post-172.css"
import "./css/core-block-supports.css"
import "./css/animations.min.css"


import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </>
);
