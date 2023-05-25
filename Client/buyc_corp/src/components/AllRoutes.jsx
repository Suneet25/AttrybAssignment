import React from 'react'
import {Routes,Route} from "react-router-dom";
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
  )
}

export default AllRoutes