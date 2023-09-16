import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Homepage from "./Homepage";
import HostProfile from "./HostProfile";
import GuestProfile from "./GuestProfile";

const Router = () => {
    const user = true;
const router = createBrowserRouter([
    {
      path: "/",
      element: user ? <Homepage/>: <Navigate to="/login" />,
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/sign-up",
      element: <SignUp/>
    },
    {
      path: "/profile/host",
      element: <HostProfile/>
    },
    {
      path: "/profile/guest",
      element: <GuestProfile/>
    }

]);
  return (
      <RouterProvider router={router} />
  );
};

export default Router;