import React, { useState } from "react";

const Step4 = ({ prevStep, nextStep, handleChange, values }) => {
  const [dbType, setDbType] = useState("");
  const [connectionType, setConnectionType] = useState("Database");

  const handleDbTypeSelection = (type) => {
    setDbType(type);
    handleChange("dbType")({ target: { value: type } });
  };

  const handleConnectionTypeSelection = (type) => {
    setConnectionType(type);
    handleChange("kbType")({ target: { value: type } });
  };

  const sqlDatabases = ["MySQL", "PostgreSQL", "SQLite", "SQL Server"];
  const noSqlDatabases = ["MongoDB", "Cassandra", "CouchDB", "Firebase"];

  const databaseOptions = dbType === "SQL" ? sqlDatabases : noSqlDatabases;
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Knowledge Base Connection
      </h2>

      <div className="mb-4 flex flex-col justify-start gap-2">
        <label className="mr-4 text-white">
          <input
            type="checkbox"
            checked={connectionType === "Database"}
            onChange={() => handleConnectionTypeSelection("Database")}
            className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-2"
          />
          Database
        </label>
        <label className="text-white">
          <input
            type="checkbox"
            checked={connectionType === "File"}
            onChange={() => handleConnectionTypeSelection("File")}
            className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-2"
          />
          File
        </label>
      </div>
      {/*  */}
      {connectionType === "Database" && (
        <>
          <div className="mb-4 flex justify-center gap-2">
            <button
              onClick={() => handleDbTypeSelection("SQL")}
              className={`bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-l focus:outline-none focus:shadow-outline ${
                dbType === "SQL" ? "bg-gray-700" : "bg-gray-500"
              }`}
            >
              SQL
            </button>
            <button
              onClick={() => handleDbTypeSelection("NoSQL")}
              className={`bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline ${
                dbType === "NoSQL" ? "bg-gray-700" : "bg-gray-500"
              }`}
            >
              NoSQL
            </button>
          </div>
          {/*  */}
          {dbType && (
            <div className="mb-4">
              <select
                value={values.databaseName}
                onChange={handleChange("databaseName")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="" disabled>
                  Select a Database
                </option>
                {databaseOptions.map((db, index) => (
                  <option key={index} value={db}>
                    {db}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter Database Connection"
              value={values.chatbotName}
              onChange={handleChange("chatbotName")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </>
      )}

      {connectionType === "File" && (
        <div className="mb-4">
          <input
            type="file"
            onChange={handleChange("file")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      )}

      <button
        onClick={prevStep}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
      >
        Prev
      </button>
      <button
        onClick={nextStep}
        className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Next
      </button>
    </div>
  );
};

export default Step4;
