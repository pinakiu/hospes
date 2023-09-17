import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Homepage from "./Homepage";
import HostProfile from "./HostProfile";
import GuestProfile from "./GuestProfile";
import { useEffect, useState } from "react";
import { updateUser } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Router = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("hello")
    if (token) {
      fetch("http://localhost:3000/auth/local/success", {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Failed to fetch user data");
          }
        })
        .then((data) => {
          if(data){
            console.log( data)
          dispatch(updateUser(data));
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [token]);

  if (loading) {
    return null;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: user ? <Homepage /> : <Navigate to="/login" />,
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/sign-up",
      element: <SignUp />
    },
    {
      path: "/profile/host",
      element: <HostProfile />
    },
    {
      path: "/profile/guest",
      element: <GuestProfile />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default Router;
