import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import Product_page from "./product_page";
import Gall from "./gal";
import Product_photos from "./product_photos";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/productpage",
    element: <Product_page/>,
  },
  {
    path:"/gal",
    element:<Gall/>,
  },
  {
    path:'/pimg',
    element:<Product_photos/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);