import { Route, Routes } from "react-router-dom";
import { Detail } from "./Detail/Detail";
import { Services } from "./ServicesMain/ServicesMain";
import { ServicesCreate } from "./ServicesCreate/ServicesCreate";

export const ServicesRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Services />} />
      <Route path=":id" element={<Detail />} />
      <Route path="post" element={<ServicesCreate />} />
    </Routes>
  );
};
