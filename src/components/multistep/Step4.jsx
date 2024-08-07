import React, { useEffect, useState } from "react";

const Step4 = ({ prevStep, nextStep, handleChange, values }) => {
  const [dbType, setDbType] = useState("");
  const [connectionType, setConnectionType] = useState("Database");
  const [isValid, setIsValid] = useState(true); // Validation state
  const [errors, setErrors] = useState({
    databaseName: "",
    dbConnection: "",
    file: ""
  });

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

  const validateForm = () => {
    let isValid = true;
    let errors = {
      databaseName: "",
      dbConnection: "",
      file: ""
    };

    if (connectionType === "Database") {
      if (!values.databaseName) {
        errors.databaseName = "Database selection is required.";
        isValid = false;
      }
      if (!values.dbConnection) {
        errors.dbConnection = "Database connection string is required.";
        isValid = false;
      }
    } else if (connectionType === "File") {
      if (!values.file) {
        errors.file = "File upload is required.";
        isValid = false;
      }
    }

    setErrors(errors);
    return isValid;
  };

  const handleNextClick = () => {
    if (validateForm()) {
      nextStep();
    } else {
      setIsValid(false);
    }
  };

  useEffect(() => {
    values.kbType = "Database";
  }, []);
  
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
            className="w-4 h-4 out bg-gray-100 border-gray-300 rounded focus:ring-gray-600  focus:ring-2  mr-2"
          />
          Database
        </label>
        <label className="text-white">
          <input
            type="checkbox"
            checked={connectionType === "File"}
            onChange={() => handleConnectionTypeSelection("File")}
            className="w-4 h-4 out bg-gray-100 border-gray-300 rounded focus:ring-gray-600  focus:ring-2  mr-2"
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
                // className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                className="rounded-md w-full border-none bg-gray-400 bg-opacity-50 px-6 py-2  text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              >
                <option value="" disabled className="bg-cardbackground">
                  Select a Database
                </option>
                {databaseOptions.map((db, index) => (
                  <option className="bg-cardbackground" key={index} value={db}>
                    {db}
                  </option>
                ))}
              </select>
              {errors.databaseName && (
                <p className="text-red-500 mt-2">{errors.databaseName}</p>
              )}
            </div>
          )}

          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter Database Connection"
              value={values.dbConnection}
              onChange={handleChange("dbConnection")}
              // className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              className="rounded-md w-full border-none bg-gray-400 bg-opacity-50 px-6 py-2  text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
            />
            {errors.dbConnection && (
              <p className="text-red-500 mt-2">{errors.dbConnection}</p>
            )}
            
          </div>
        </>
      )}

      {connectionType === "File" && (
        <>
          <h1 className="text-right">Running on alpha version</h1>
          <div className="mb-4 mt-2">
            <input
              type="file"
              onChange={handleChange("file")}
              // className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              className="rounded-md w-full border-none bg-gray-400 bg-opacity-50 px-6 py-2  text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
            />
            {errors.file && (
              <p className="text-red-500 mt-2">{errors.file}</p>
            )}
          </div>
        </>
      )}
      <div className="flex">
        <button
          onClick={prevStep}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
        >
          Prev
        </button>
        <button
          onClick={handleNextClick}
          // className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          className="bg-cardbackground px-4 py-2 hover:scale-105  border-[0.5px] border-gray-700 rounded-md flex  justify-center items-center gap-2 text-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step4;
