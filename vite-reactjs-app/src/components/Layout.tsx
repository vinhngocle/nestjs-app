import { useAppSelector } from "../hooks/redux-hook";
import Navbar from "./Navbar/Navbar";
import { Navigate, Outlet } from "react-router-dom";

function Layout() {
  const basicUserInfo = useAppSelector(
    (state) => state.authReducer.basicUserInfo
  );

  if (!basicUserInfo) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
