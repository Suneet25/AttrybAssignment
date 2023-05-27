import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";

import SingleCarPage from "../pages/SingleCarPage";
import AddDetails from "../pages/Inventory_Related";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/single-car-page/:id" element={<SingleCarPage />}></Route>
      <Route
        path="/car-addDetails"
        element={
          <PrivateRoute>
            <AddDetails />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  );
};

export default AllRoutes;
