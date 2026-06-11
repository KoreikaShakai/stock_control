import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import { Header } from "./components/Header.jsx";
import { CameraModal } from "./components/CameraModal.jsx";
import { News } from "./components/News.jsx";
import { StockList } from "./components/stock/StockList.jsx";
import { useState } from "react";
import { ChangeFilter } from "./components/ChangeFilter.jsx";

function App() {
  return (
    <>
      <Header />
      <CameraModal />
      <ChangeFilter />
      <StockList />
    </>
  );
}

export default App;
