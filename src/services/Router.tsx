import { Routes, Route } from "react-router-dom";

import { App } from "../pages/App";
import { SingIn } from "../pages/SingIn";

export function AppRoute() {
    return (
        <Routes>
            <Route path="/" element={<SingIn />} />
        </Routes>
    );
}
