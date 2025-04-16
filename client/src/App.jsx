import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./css/App.css";
import { Fragment } from "react";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Favourites from "./pages/Favourites";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
    // const movieNumber = 1;
    // const [count, setCount] = useState(0)

    return (
        <MovieProvider>
            <NavBar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favourites" element={<Favourites />} />
                </Routes>
            </main>
        </MovieProvider>
    );
}

function Text({ text }) {
    return (
        <div>
            <h1>Text</h1>
            <p>{text}</p>
        </div>
    );
}

export default App;
