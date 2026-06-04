import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import { Header } from "./components/Header.jsx";
import { CameraModal } from "./components/CameraModal.jsx";
import { News } from "./components/News.jsx";
import { StockList } from "./components/StockList.jsx";

window.localStorage.setItem("user_id", "abcde");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <CameraModal />
    {/* <News /> */}
    <StockList />
  </StrictMode>,
);
