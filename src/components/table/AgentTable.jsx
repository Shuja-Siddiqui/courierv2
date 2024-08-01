import React, { useEffect, useState } from "react";

const AgentTable = ({ topHeading, data }) => {
  return (
    <>
      <h2 className="text-xl font-bold px-6 mb-4 text-white">
        {topHeading ? topHeading : "Active Agents"}
      </h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-600 ">
            <thead >
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider font-manrope">
                  Agent Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider font-manrope">
                  Agent Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider font-manrope">
                  Work Flow
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider font-manrope">
                  KB Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider font-manrope">
                  Deploy Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider font-manrope">
                  External Model
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider font-manrope">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-600 divide-y divide-gray-200">
              {data?.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200 font-manrope">
                    {item?.agentName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200 font-manrope">
                    {item?.agentType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200 font-manrope">
                    {item?.workFlow}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200 font-manrope">
                    {item?.kbType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200 font-manrope">
                    {item?.deployType.Website && "Website"}
                    {item?.deployType.Email && " | " + "Email"}
                    {!item?.deployType.Website && !item?.deployType.Email
                      ? "Dashboard"
                      : ""}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200 font-manrope">
                    {item?.externalModel !== "" ? item?.externalModel : "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200 font-manrope">
                    {item?.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AgentTable;
