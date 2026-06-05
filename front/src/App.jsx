import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import { Header } from "./components/Header.jsx";
import { CameraModal } from "./components/CameraModal.jsx";
import { News } from "./components/News.jsx";
import { StockList } from "./components/StockList.jsx";
import { useState } from "react";

function App() {
  const [isUpload, setIsUpload] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <CameraModal setIsUpload={setIsUpload} open={open} setOpen={setOpen} />
      <News></News>
      <StockList isUpload={isUpload} setIsUpload={setIsUpload} />
    </>
  );
}

export default App;
