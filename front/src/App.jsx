import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import { Header } from "./components/Header.jsx";
import { CameraModal } from "./components/CameraModal.jsx";
import { News } from "./components/News.jsx";
import { StockList } from "./components/StockList.jsx";
import { useState } from "react";

// デモ用ID
window.localStorage.setItem("user_id", "abcde");

function App() {
  const [isUpload, setIsUpload] = useState(false);

  return (
    <>
      <Header />
      <CameraModal setIsUpload={setIsUpload} />
      <News></News>
      <StockList isUpload={isUpload} />
    </>
  );
}

export default App;
