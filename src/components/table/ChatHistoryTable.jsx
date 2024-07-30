import React from "react";
import { useSelector } from "react-redux";
import { selectAgentDetails } from "../../redux/agentSlice";

export default function ChatHistoryTable() {
  const agents = useSelector(selectAgentDetails);

  const data = [
    { hoursSaved: 2, workflowCost: 5 },
    { hoursSaved: 6, workflowCost: 3 },
    { hoursSaved: 1, workflowCost: 2.8 },
    { hoursSaved: 0.5, workflowCost: 1.5 },
    { hoursSaved: 1.5, workflowCost: 5 },
  ];

  return (
    <div className="w-[78%] flex flex-col gap-4">
      <section className="container mx-auto">
        <div className="flex flex-col">
          <div className=" overflow-x-auto">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="overflow-hidden border border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                      >
                        WorkFlow
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                      >
                        Number of Hours Saved
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                      >
                        Cost Of Workflow
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-900 divide-y divide-gray-700">
                    {agents?.map((item, index) => (
                      <tr
                        className={
                          index % 2 === 0 ? "bg-gray-700" : "bg-gray-600"
                        }
                      >
                        <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">
                          {item.workFlow}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">
                          {data[index]?.hoursSaved}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">
                          {data[index]?.workflowCost}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
