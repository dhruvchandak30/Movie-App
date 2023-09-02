import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Main from "./pages/Main";
import Error from "./pages/Error";
import SearchPage from "./pages/Search";
import Movie from "./pages/Movie";
<meta name="viewport" content="width=1000; user-scalable=1.0;" />;
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
