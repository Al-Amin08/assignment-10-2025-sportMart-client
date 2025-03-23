import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Component/Navbar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
  },
]);
