import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import RegForm from "./pages/RegForm";
import Movies from "./pages/Movies";


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/signUp/RegForm" element={<RegForm />} />

                <Route path="/movies" element={<Movies />} />
            </Routes>
        </BrowserRouter>
    );
};
