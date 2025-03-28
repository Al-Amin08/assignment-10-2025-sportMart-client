import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Component/Navbar";
import ErrorPage from "../Component/ErrorPage";
import Root from "../Component/Root";
import AddEquipment from "../Component/AddEquipment";
import Login from "../Component/Login";
import Register from "../Component/Register";
import PrivateRoute from "../Privateroute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/addEquipment",
        element: (
          <PrivateRoute>
            <AddEquipment></AddEquipment>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
