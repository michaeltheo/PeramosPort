import { lazy, Suspense } from "react";
import "./App.css";
import { PageLoader, Header } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const ColorPalettePage = lazy(() => import("./pages/ColorPalette"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/color-palette" element={<ColorPalettePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
