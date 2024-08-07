// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./pages/Topbar";
import Sidebar from "./pages/Sidebar";
import ManageAgent from "./pages/ManageAgent";
import ChatHistory from "./pages/ChatHistory";
import Support from "./pages/Support";
import TicketDetail from "./components/table/TicketDetail";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect, useState } from "react";
import Overview from "./pages/Overview";
import Monitor from "./pages/Monitor";
import SupportTicket from "./components/support/SupportTicket";
import ProfessionalService from "./pages/ProfessionalService";
import CoomingSoon from "./pages/CoomingSoon";
import KnowledgeBase from "./pages/KnowledgeBase";
import Tools from "./pages/Tools";
import { setAgentData } from "./redux/agentSlice";
import { useDispatch } from "react-redux";
import InboundCalls from "./pages/InboundCalls";

function App() {
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  const handleDataChange = (newData) => {
    setData(newData);
  };

  useEffect(() => {
    const agent = JSON.parse(localStorage.getItem("agentData"));
    dispatch(setAgentData(agent));
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <ProtectedRoute
              element={
                <div
                  className="flex bg-black "
                  style={{
                    backgroundColor: "#101010",
                    minHeight: "100vh",
                    color: "#fff",
                  }}
                >
                  <Sidebar data={data} />
                  <div className="flex-1 flex flex-col w-[85%] ml-[15%] bg-background ">
                    <Topbar />
                    <Routes>
                      <Route path="/" element={<Overview />} />
                      <Route
                        path="/agents"
                        element={
                          <ManageAgent onDataChange={handleDataChange} />
                        }
                      />
                      <Route path="/chat-history" element={<ChatHistory />} />
                      <Route path="/inbound-calls" element={<InboundCalls />} />
                      <Route path="/support" element={<Support />} />
                      <Route path="/monitor" element={<Monitor />} />
                      <Route
                        path="support/ticket"
                        element={<SupportTicket />}
                      />
                      <Route
                        path="/professional-services"
                        element={<ProfessionalService />}
                      />

                      <Route
                        path="/knowledge-base"
                        element={<KnowledgeBase />}
                      />
                      <Route path="/actions-tools" element={<Tools />} />
                      <Route
                        path="/workflow-library"
                        element={<CoomingSoon />}
                      />
                      <Route
                        path="/approvals-flows"
                        element={<CoomingSoon />}
                      />
                      <Route path="/task-history" element={<CoomingSoon />} />
                      <Route path="/settings" element={<CoomingSoon />} />
                      {/* <Route
                        path="/support/ticket/:id"
                        element={<TicketDetail />}
                      /> */}
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
