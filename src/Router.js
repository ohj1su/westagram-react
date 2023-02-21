import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>/} />
            <Route path='/signup' element={<Signup/>/} />
            <Route path='/main' element={<Main/>/} />
        </Routes>
        </BrowserRouter>
    );
};

export default Router;