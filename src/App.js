import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./pages/Topbar";
import Monitor from "./pages/Monitor";
import Sidebar from "./pages/Sidebar";
import ManageAgent from "./pages/ManageAgent";
import ChTable from "./components/chathistory/ChTable";
import ChatHistory from "./pages/ChatHistory";
import Support from "./pages/Support";
import TicketDetail from "./components/table/TicketDetail";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Topbar />
          <Routes>
            <Route path="/" element={<Monitor />} />
            <Route path="/agents" element={<ManageAgent />} />
            <Route path="/chat-history" element={<ChatHistory />} />
            <Route path="/support" element={<Support />} />
            <Route
              path="/support/ticket-detail"
              element={<TicketDetail />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
