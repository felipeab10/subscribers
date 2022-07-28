import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { AppRoute } from "../services/Router";
import { theme } from "../styles/theme";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <AppRoute />
            </ChakraProvider>
        </BrowserRouter>
    </React.StrictMode>
);
