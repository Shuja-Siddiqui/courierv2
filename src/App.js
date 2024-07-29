import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./pages/Topbar";
import Monitor from "./pages/Monitor";
import Sidebar from "./pages/Sidebar";
import ManageAgent from "./pages/ManageAgent";

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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
