import { Routes, Route } from "react-router-dom";

import { App } from "../pages/App";
import { Dashboard } from "../pages/Dashboard";
import { Register } from "../pages/Register";
import { SingIn } from "../pages/SingIn";

export function AppRoute() {
    return (
        <Routes>
            <Route path="/" element={<SingIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}
