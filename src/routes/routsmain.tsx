import { Route, Routes } from "react-router-dom";
import FormRegister from "../pages/register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={""} />
      <Route path="/home" element={""} />
      <Route path="/login" element={""} />
      <Route path="/register" element={<FormRegister />} />
      <Route path="/dashboard" element={""} />
    </Routes>
  );
};
