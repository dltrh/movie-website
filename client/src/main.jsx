import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* This wrapping gives the app an ability to change the component base on the navigation */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);
