import React from "react";

// const Card = ({ title, value, change }) => {
//   return (
//     <div className="p-4 bg-gray-800 shadow-sm shadow-gray-700 hover:scale-105 border-[2px] border-gray-800 rounded-lg w-[100%]">
//       <div className="text-xl font-bold text-white">{title}</div>
//       <div className="text-2xl font-semibold text-white mt-2">{value}</div>
//     </div>
//   );
// };
// const cardsData = [
//   { title: "Total Number Of Chats", value: 276 },
//   { title: "User Feedbacks", value: 6.5 },
//   { title: "Number Of Email Bot", value: 200 },
//   { title: "Escalated Tickets", value: 7.7 },
// ];

const AverageCard = () => {
  return (
    <div className="flex flex-col gap-4 w-[100%]">
      {/* 1 */}
      <div className="p-4 bg-cardbackground bg-opacity-50  hover:scale-105 rounded-2xl w-[100%] ">
        <div className="text-xl font-bold text-white">
          Setup a knowledge base
        </div>
        <div className="text-md font-semibold text-gray-500 mt-2">
          Upload or connect files, docs & more to give agents business context
        </div>
        <div className=" flex justify-end mt-4">
          <button className="bg-cardbackground px-4 py-2  border-[0.5px] border-gray-700 rounded-md ">
            Setup now
          </button>
        </div>
      </div>

      <div className="p-4 bg-cardbackground bg-opacity-50  hover:scale-105 rounded-2xl w-[100%] ">
        <div className="text-xl font-bold text-white">
          Connect tools
        </div>
        <div className="text-md font-semibold text-gray-500 mt-2">
          Integrate your TMS, load boards email & more for agents work with your existing tools
        </div>
        <div className=" flex justify-end mt-4">
          <button className="bg-cardbackground px-4 py-2  border-[0.5px] border-gray-700 rounded-md ">
            Setup now
          </button>
        </div>
      </div>
      <div className="p-4 bg-cardbackground bg-opacity-50  hover:scale-105 rounded-2xl w-[100%] ">
        <div className="text-xl font-bold text-white">
          Configure agent deployments
        </div>
        <div className="text-md font-semibold text-gray-500 mt-2">
          Make your agents available to employees and customers across your website, email & more
        </div>
        <div className=" flex justify-end mt-4">
          <button className="bg-cardbackground px-4 py-2  border-[0.5px] border-gray-700 rounded-md ">
            Setup now
          </button>
        </div>
      </div>

      {/* {cardsData.map((card, index) => (
       
        <Card
          key={index}
          title={card.title}
          value={card.value}
          change={card.change}
        />
      
      ))} */}
    </div>
  );
};

export default AverageCard;
