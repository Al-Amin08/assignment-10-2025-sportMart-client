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
        path: "/product/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/equipments/${params.id}`),
      },
      {
        path: "/myEquipment",
        element: (
          <PrivateRoute>
            <MyEquipment></MyEquipment>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
