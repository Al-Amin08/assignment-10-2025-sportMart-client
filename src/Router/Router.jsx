import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Component/Navbar";
import ErrorPage from "../Component/ErrorPage";
import Root from "../Component/Root";
import AddEquipment from "../Component/AddEquipment";
import Login from "../Component/Login";
import Register from "../Component/Register";
import PrivateRoute from "../Privateroute/PrivateRoute";
import Home from "../Component/Home/Home";
import ProductDetails from "../Component/Home/ProductDetails";
import MyEquipment from "../Component/MyEquipment";
import UpdateMyEquipment from "../Component/UpdateMyEquipment";

import AllSportsEquipment from "../Component/Home/AllSportsEquipment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
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
      {
        path: "/equipments/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-ten-beta.vercel.app/equipments/${params.id}`
          ),
      },
      {
        path: "/myEquipments/:email",
        element: (
          <PrivateRoute>
            <MyEquipment></MyEquipment>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-ten-beta.vercel.app/myEquipments/${params.email}`
          ),
      },
      {
        path: "/updateMyEquipment/:id",
        element: <UpdateMyEquipment></UpdateMyEquipment>,
        loader: () => fetch(``),
      },
      {
        path: "/allSportsEquipment",
        element: <AllSportsEquipment></AllSportsEquipment>,
        loader: () =>
          fetch(
            "https://assignment-10-server-ten-beta.vercel.app/allEquipments"
          ),
      },
    ],
  },
]);
