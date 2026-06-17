import { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import HomeEn from "./pages/HomeEn";
import HomePt from "./pages/HomePt";
import HowItWorksEn from "./pages/HowItWorksEn";
import HowItWorksPt from "./pages/HowItWorksPt";
import { ROUTES } from "./content";

/** On navigation: jump to the #hash target if present, else scroll to top. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // wait a frame so the target section is mounted
      requestAnimationFrame(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
        else window.scrollTo(0, 0);
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path={ROUTES.homeEn} element={<HomeEn />} />
        <Route path={ROUTES.homePt} element={<HomePt />} />
        <Route path={ROUTES.hiwEn} element={<HowItWorksEn />} />
        <Route path={ROUTES.hiwPt} element={<HowItWorksPt />} />
        <Route path="*" element={<Navigate to={ROUTES.homeEn} replace />} />
      </Routes>
    </>
  );
}
