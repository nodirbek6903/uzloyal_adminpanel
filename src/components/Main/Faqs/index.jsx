import { Route, Routes } from "react-router-dom";
import { FaqDetail } from "./FaqsDetail/FaqsDetail";
import { Faqs } from ".//Faqs/Faqs";
import { FaqsCreate } from "./FaqsCreate/FaqsCreate";

export const FaqsRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Faqs />} />
      <Route path=":id" element={<FaqDetail />} />
      <Route path="post" element={<FaqsCreate />} />
    </Routes>
  );
};
