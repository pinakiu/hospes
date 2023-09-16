import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
const Router = () => {
    
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/sign-up",
      element: <SignUp/>
    },
]);
  return (
      <RouterProvider router={router} />
  );
};

export default Router;