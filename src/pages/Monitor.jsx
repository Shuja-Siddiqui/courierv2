import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { TbHeartRateMonitor } from "react-icons/tb";
import { VscActivateBreakpoints } from "react-icons/vsc";

// Generate random data
const generateData = () => {
  const data = [];
  for (let i = 1; i <= 12; i++) {
    data.push({
      driverId: `DR${i}`,
      orderId: `ORD${i}`,
      pod: `Proof of Delivery ${i}`,
      rating: Math.floor(Math.random() * 10) + 1,
    });
  }
  return data;
};

const PodCard = ({ title, isActive, onToggleActive, onView }) => {
  return (
    <div className="p-4 bg-gray-900 shadow-lg shadow-gray-800 hover:scale-105 border-[2px] border-gray-900 rounded-lg">
      <div className="text-xl font-bold text-white">{title}</div>
      <div className="flex justify-center items-center gap-3 mt-2">
        <button
          className={`flex justify-center items-center gap-2 text-white rounded-lg px-4 py-2 ${
            isActive ? "bg-green-900" : "bg-gray-800"
          }`}
          onClick={onToggleActive}
        >
          <VscActivateBreakpoints className="rotate-180" />
          {isActive ? "Activated" : "Activate"}
        </button>
        <button
          className={`flex justify-center items-center gap-2 bg-gray-800 text-white rounded-lg px-4 py-2 ${
            isActive ? "cursor-pointer" : "cursor-not-allowed"
          }`}
          disabled={!isActive}
          onClick={onView}
        >
          <FaEye />
          View
        </button>
      </div>
    </div>
  );
};

const Table = ({ data, onFilterChange, selectedRating, currentPage, onPageChange }) => {
  const rowsPerPage = 6;
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleRatingChange = (event) => {
    onFilterChange(Number(event.target.value));
  };

  const handlePageChange = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      onPageChange(currentPage - 1);
    } else if (direction === "next" && currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const paginatedData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <section className="container px-4 mx-auto mt-4">
      <div className="flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-700 md:rounded-lg">
              <div className="flex justify-between items-center bg-gray-800 p-4">
                <span className="text-white">Filter by Rating: </span>
                <select value={selectedRating} onChange={handleRatingChange} className="text-black">
                  <option value="all">All</option>
                  {[...Array(10).keys()].map((n) => (
                    <option key={n + 1} value={n + 1}>
                      {n + 1}
                    </option>
                  ))}
                </select>
              </div>
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-400">Driver-Id</th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-400">Order-Id</th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-400">Proof of Delivery</th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-400">Rating</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-900 divide-y divide-gray-700">
                  {paginatedData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-700" : "bg-gray-600"}>
                      <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">{item.driverId}</td>
                      <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">{item.orderId}</td>
                      <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">{item.pod}</td>
                      <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">{item.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between items-center bg-gray-800 p-4">
                <button
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg"
                  onClick={() => handlePageChange("prev")}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span className="text-white">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg"
                  onClick={() => handlePageChange("next")}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Monitor() {
  const [cardsData] = useState([{ title: "POD Audit 3.1" }, { title: "POD Audit Beta" }]);
  const [activeCard, setActiveCard] = useState(null);
  const [viewedCard, setViewedCard] = useState(null);
  const [tableData] = useState(generateData());
  const [selectedRating, setSelectedRating] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const handleToggleActive = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  const handleView = (index) => {
    setViewedCard(index);
    setCurrentPage(1);
  };

  const filteredData = selectedRating === "all" ? tableData : tableData.filter((item) => item.rating === selectedRating);

  return (
    <div className="h-screen bg-background p-4">
      <div className="flex justify-center items-center text-white text-5xl gap-2">
        <span>
          <TbHeartRateMonitor className="mt-2" />
        </span>
        <span>Monitor</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {cardsData.map((card, index) => (
          <PodCard
            key={index}
            title={card.title}
            isActive={index === activeCard}
            onToggleActive={() => handleToggleActive(index)}
            onView={() => handleView(index)}
          />
        ))}
      </div>

      {viewedCard !== null && (
        <Table
          data={filteredData}
          onFilterChange={setSelectedRating}
          selectedRating={selectedRating}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
