import App from "./App";
import { Routes, Route } from "react-router";
import { Login } from "./components/Login";

function Roots() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<App />} />
      </Routes>
    </>
  );
}
export default Roots;
