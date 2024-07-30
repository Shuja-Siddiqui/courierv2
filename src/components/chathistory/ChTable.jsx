import React from "react";
import { FaHistory, FaStar, FaStarHalfAlt, FaRegStar, FaEye } from "react-icons/fa";

export default function ChTable() {
  const data = [
    { id: "001", status: "Completed", feedback: 5, transcript: true },
    { id: "002", status: "Pending", feedback: 3, transcript: true },
    { id: "003", status: "In Progress", feedback: 2.8, transcript: true },
    { id: "004", status: "Completed", feedback: 1.5, transcript: true },
    { id: "005", status: "Completed", feedback: 5, transcript: true },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={`full-${index}`} className="text-yellow-500" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={`empty-${index}`} className="text-yellow-500" />
        ))}
      </>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex text-white text-3xl justify-center items-center gap-2">
        <FaHistory /> Chat History
      </div>
      <section className="container px-4 mx-auto">
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-400"
                      >
                        Chat ID
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                      >
                        Feedback
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                      >
                        Transcript
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-900 divide-y divide-gray-700">
                    {data.map((item, index) => (
                      <tr
                        key={item.id}
                        className={index % 2 === 0 ? "bg-gray-700" : "bg-gray-600"}
                      >
                        <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">{item.id}</td>
                        <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">{item.status}</td>
                        <td className=" flex space-x-[2px]  px-4 py-4 mt-2 text-sm text-gray-300 whitespace-nowrap">
                          {renderStars(item.feedback)}
                        </td>
                        <td className="px-4 py-4 text-lg text-white whitespace-nowrap">
                          {item.transcript ? (
                            <button className="transition-colors duration-200 hover:text-gray-900 focus:outline-none">
                              <FaEye/>
                            </button>
                          ) : (
                            "N/A"
                          )}
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
