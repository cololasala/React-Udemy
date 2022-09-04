import { Navigate, Routes, Route } from "react-router-dom";
import { NavBar } from "../../ui";
import { HeroPage, MarvelPage, Search, DcPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/*" element={<Navigate to="/marvel" />} />
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path='search' element={<Search/>}/>
          <Route path='hero/:id' element={<HeroPage/>}/>
        </Routes>
      </div>
    </>
  );
};
