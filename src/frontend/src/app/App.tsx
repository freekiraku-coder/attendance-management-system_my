import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import AttendancePage from "../pages/AttendancePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 初期表示時に/loginへリダイレクト */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/attendance" element={<AttendancePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;