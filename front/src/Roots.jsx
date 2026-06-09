import App from "./App";
import { Routes, Route } from "react-router";
import { LoginApp } from "./components/login/LoginApp";

function Roots() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginApp />} />
        <Route path="/main" element={<App />} />
      </Routes>
    </>
  );
}
export default Roots;
