import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../component/Detail";
import Home from "../component/Home";

const Router = () =>{
    return(
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path=":id" element={<Detail/>}></Route>
     </Routes>
     </BrowserRouter>
    );
};

export default Router