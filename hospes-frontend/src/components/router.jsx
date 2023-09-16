import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Homepage from "./Homepage";
import HostProfile from "./HostProfile";
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
    {path: "/profile",
    element: <HostProfile/>}
]);
  return (
      <RouterProvider router={router} />
  );
};

export default Router;