import "./assets/styles/main.sass";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePages";
import Terms from "./pages/Terms";
import Policy from "./pages/Policy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="terms" element={<Terms />} />
          <Route path="policy" element={<Policy />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
