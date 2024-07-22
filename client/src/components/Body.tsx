import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ToolPage from "./pages/ToolPage";
import NotFoundPage from "./pages/NotFoundPage";
import TechnicalDocumentation from "./pages/TechnicalDocumentation";
export default function Body() {
  return (
    <>
      <div className="xl:container xl:mx-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route
              path="/"
              element={<HomePage />}
              errorElement={<NotFoundPage />}
            />
            <Route path="/tool" element={<ToolPage />} />
            <Route
              path="/technical-documentation"
              element={<TechnicalDocumentation />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
