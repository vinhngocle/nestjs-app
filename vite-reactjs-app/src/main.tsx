import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Login from "./components/Login/Login.tsx";
import Register from "./components/Register/Register.tsx";
import DashboardPage from "./pages/admin/DashboardPage.tsx";
import CoursePage from "./pages/admin/CoursePage.tsx";
import LayoutAdmin from "./components/LayoutAdmin.tsx";

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
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: "",
        element: <DashboardPage />,
      },
      {
        path: "course",
        element: <CoursePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
