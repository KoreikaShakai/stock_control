import APP from "./App";
import { Routes, Route } from "react-router";

function Roots() {
  return (
    <>
      <Routes>
        <Route path="/main" element={<APP />} />
      </Routes>
    </>
  );
}
export default Roots;
