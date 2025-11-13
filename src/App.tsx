import { lazy, Suspense } from "react";
import "./App.css";
import { PageLoader, Header, Footer } from "./components";
import { useAOS } from "@/hooks";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const ColorPalettePage = lazy(() => import("./pages/ColorPalette"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  useAOS();
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/color-palette" element={<ColorPalettePage />} />
          {/* 404 Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
