import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Login from "./components/Login/Login.tsx";
import Register from "./components/Register/Register.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      // {
      //   path: "/product",
      //   element: <ProductPage />,
      // },
      // {
      //   path: "/cart",
      //   element: <CartPage />,
      // },
      // {
      //   path: "/book",
      //   element: <BookPage />,
      // },
      // {
      //   path: "/post",
      //   element: <PostPage />,
      // },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
