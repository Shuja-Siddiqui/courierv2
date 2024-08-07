import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaChevronDown,
  FaChevronUp,
  FaHistory,
  FaRegQuestionCircle,
  FaUser,
} from "react-icons/fa";
import { normallogo } from "../assets/images";
import { CiHome } from "react-icons/ci";
import { BiDiamond, BiSolidPhoneIncoming } from "react-icons/bi";
import { PiChartPieSliceLight, PiFileDashedFill } from "react-icons/pi";
import { AiFillTool } from "react-icons/ai";
import { RiCustomerService2Fill, RiSettings5Fill } from "react-icons/ri";
import { FaBots, FaPhone } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { selectAgentDetails } from "../redux/agentSlice";

const Sidebar = ({ data }) => {
  const [isWorkflowOpen, setIsWorkflowOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const agents = useSelector(selectAgentDetails);
  

  const toggleWorkflow = () => {
    setIsWorkflowOpen(!isWorkflowOpen);
  };
  const toggleSupport = () => {
    setIsSupportOpen(!isSupportOpen);
  };

  const auditAgents = agents?.filter((agent) => agent.agentType === "Audit");
  const emailType = agents?.filter((agent) => agent.deployType?.Email === true);
  const phoneType = agents?.filter((agent) => agent.deployType?.Phone === true);
  const websiteType = agents?.filter(
    (agent) => agent.deployType?.Website === true
  );

  return (
    <div className="min-h-[100vh] h-[100%] w-[15%] bg-black text-white flex flex-col overflow-y-auto custom-scrollbar fixed">
      <div className="flex justify-center items-center px-5 w-[15%] fixed  bg-black">
        <div className="flex h-[10px] w-full justify-center items-center gap-2 text-start px-4 py-5 mt-[25px] rounded-lg bg-gradient-to-br from-background to-gray-800 shadow-lg">
          <img src={normallogo} alt="Logo" className="object-fill" />
          <h1 className="text-[15px] font-bold">Normal</h1>
        </div>
      </div>
      <div className="p-4 flex-1 mt-[30%]">
        <div className="mb-4">
          <div className="">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center space-x-2 p-2 bg-gray-700 rounded"
                  : "flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
              }
            >
              <CiHome size={25} />
              <span>Overview</span>
            </NavLink>
          </div>
        </div>
        <div className="mb-4">
          <div className="mt-2">
            <NavLink
              to="/agents"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center space-x-2 p-2 bg-gray-700 rounded"
                  : "flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
              }
            >
              <BiDiamond size={25} />
              <span>Agents</span>
            </NavLink>
          </div>
        </div>
        {agents && agents.length > 0 && agents[0]?.status === "Active" ? (
          <div className="mb-4">
            <div className="mt-2">
              <div
                className="flex items-center justify-between space-x-2 p-2 hover:bg-gray-700 rounded cursor-pointer"
                onClick={toggleSupport}
              >
                <div className="flex items-center space-x-2 ">
                  <RiCustomerService2Fill size={25} />
                  <span>Support Bots</span>
                </div>
                {isSupportOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {isSupportOpen && (
                <div className="relative">
                  <div className="absolute left-2 h-full border-l-2 border-gray-700"></div>
                  <div className="">
                    {emailType.length > 0 || websiteType.length > 0 ? (
                      <NavLink
                        to="/chat-history"
                        className={({ isActive }) =>
                          isActive
                            ? "flex items-center space-x-2 p-2 bg-gray-700 rounded"
                            : "flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
                        }
                      >
                        <div className="border-b-2 border-l-2 w-3 rounded-xl border-gray-700"></div>
                        <FaHistory />
                        <span>Chat History</span>
                      </NavLink>
                    ) : null}
                    {phoneType.length > 0 && (
                      <NavLink
                        to="/inbound-calls"
                        className={({ isActive }) =>
                          isActive
                            ? "flex items-center space-x-2 p-2 bg-gray-700 rounded"
                            : "flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
                        }
                      >
                        <div className="border-b-2 border-l-2 w-3 rounded-xl border-gray-700"></div>
                        <BiSolidPhoneIncoming />
                        <span>Inbound Calls</span>
                      </NavLink>
                    )}
                    {/* <NavLink
                      to="/support"
                      className={({ isActive }) =>
                        isActive
                          ? "flex items-center space-x-2 p-2 bg-gray-700 rounded"
                          : "flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
                      }
                    >
                      <div className="border-b-2 border-l-2 w-3 rounded-xl border-gray-700"></div>
                      <FaUser />
                      <span>Support</span>
                    </NavLink> */}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="mb-4">
          <div className="mt-2">
            <NavLink
              to="/knowledge-base"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center space-x-2 p-2 bg-gray-700 rounded"
                  : "flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
              }
            >
              <PiFileDashedFill size={25} />
              <span>Knowledge Base</span>
            </NavLink>
          </div>
        </div>
        <div className="mb-4">
          <div className="mt-2">
            <NavLink
              to="/actions-tools"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center space-x-2 p-2 bg-gray-700 rounded"
                  : "flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
              }
            >
              <AiFillTool size={25} />
              <span>Actions & Tools</span>
            </NavLink>
          </div>
        </div>
        <div className="mb-4">
          <div className="mt-2">
            <div
              className="flex items-center justify-between space-x-2 p-2 hover:bg-gray-700 rounded cursor-pointer"
              onClick={toggleWorkflow}
            >
              <div className="flex items-center space-x-2 ">
                <PiChartPieSliceLight className="rotate-90" size={25} />
                <span>Workflows</span>
              </div>
              {isWorkflowOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isWorkflowOpen && (
              <div className="relative">
                <div className="absolute left-2 h-full border-l-2 border-gray-700"></div>
                <div className="">
                  {auditAgents && auditAgents.length > 0 && (
                    <NavLink
                      to="/monitor"
                      className={({ isActive }) =>
                        isActive
                          ? "flex items-center space-x-2 p-2 bg-gray-700 rounded"
                          : "flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
                      }
                    >
                      <div className="border-b-2 border-l-2 w-3 rounded-xl border-gray-700"></div>
                      <span>Monitor</span>
                    </NavLink>
                  )}
                  <NavLink
                    to="/workflow-library"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center space-x-2 p-2 bg-gray-700 rounded"
                        : "flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
                    }
                  >
                    <div className="border-b-2 border-l-2 w-3 rounded-xl border-gray-700"></div>
                    <span>Workflow Library</span>
                  </NavLink>
                  <NavLink
                    to="/approvals-flows"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center space-x-2 p-2 bg-gray-700 rounded"
                        : "flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
                    }
                  >
                    <div className="border-b-2 border-l-2 w-3 rounded-xl border-gray-700"></div>
                    <span>Approvals & Flows</span>
                  </NavLink>
                  <NavLink
                    to="/task-history"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center space-x-2 p-2 bg-gray-700 rounded"
                        : "flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
                    }
                  >
                    <div className="border-b-2 border-l-2 w-3 rounded-xl border-gray-700"></div>
                    <span>Task History</span>
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-gray-700">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? "flex items-center space-x-2 p-2 bg-gray-700 rounded"
              : "flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
          }
        >
          <RiSettings5Fill size={25} />
          <span>Settings</span>
        </NavLink>
        <NavLink
          to="/professional-services"
          className={({ isActive }) =>
            isActive
              ? "flex items-center space-x-2 p-2 bg-gray-700 rounded"
              : "flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
          }
        >
          <FaRegQuestionCircle size={25} />
          <span>Professional Services</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
