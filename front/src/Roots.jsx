import App from "./App";
import { Routes, Route } from "react-router";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";

function Roots() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<App />} />
      </Routes>
    </>
  );
}
export default Roots;
