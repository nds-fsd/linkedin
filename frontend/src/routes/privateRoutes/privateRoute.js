import { Navigate, Outlet } from "react-router-dom";
import { getUserToken } from "../../utils/localStorage.utils";



export const PrivateRoutes = () => {
    //En este punto no funciona getUserToken()

    if (getUserToken) {
      return <Outlet />;
    } else {
      return <Navigate to="/" />;
    }
  };
  





