// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./pages/Topbar";
import Monitor from "./pages/Monitor";
import Sidebar from "./pages/Sidebar";
import ManageAgent from "./pages/ManageAgent";
import ChatHistory from "./pages/ChatHistory";
import Support from "./pages/Support";
import TicketDetail from "./components/table/TicketDetail";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <ProtectedRoute
              element={
                <div className="flex">
                  <Sidebar />
                  <div className="flex-1 flex flex-col">
                    <Topbar />
                    <Routes>
                      <Route path="/" element={<Monitor />} />
                      <Route path="/agents" element={<ManageAgent />} />
                      <Route path="/chat-history" element={<ChatHistory />} />
                      <Route path="/support" element={<Support />} />
                      <Route path="/support/ticket/:id" element={<TicketDetail />} />
                    </Routes>
                  </div>
                </div>
              }
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
