import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from "./components/layout/MainLayout";
import { HomePage } from "./pages/HomePage";
import { LaunchPage } from "./pages/LaunchPage";
import { SellPage } from "./pages/SellPage";
import { ToolsPage } from "./pages/ToolsPage";
import { DashboardPage } from "./pages/DashboardPage";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/launch" element={<LaunchPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/tools" element={<ToolsPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;