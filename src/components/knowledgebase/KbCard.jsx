import React, { useState } from 'react';
import { files, mongodb, spreedsheet, sql } from "../../assets/images";

const cardData = [
  {
    title: 'Spreed Sheet',
    image: spreedsheet,
    bgColor: 'bg-green-500',
  },
  {
    title: 'Files',
    image: files,
    bgColor: 'bg-yellow-500',
  },
  {
    title: 'MongoDb',
    image: mongodb,
    bgColor: 'bg-stone-500',
  },
  {
    title: 'Sql',
    image: sql,
    bgColor: 'bg-sky-500',
  },
];

const KbCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSetupClick = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCard(null);
  };

  return (
    <div className="flex justify-start gap-4 w-[100%]">
      {cardData.map((card, index) => (
        <div key={index} className="p-4 bg-cardbackground bg-opacity-50 rounded-2xl w-[25%]">
          <div className="text-xl font-bold text-white">{card.title}</div>
          <div className={`text-md flex justify-center items-center mx-auto font-semibold text-gray-500 mt-2 ${card.bgColor} bg-opacity-10 w-36 h-36 rounded-full`}>
            <div className="w-28 h-28">
              <img src={card.image} alt={card.title} className="hover:scale-125" />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => handleSetupClick(card)}
              className="bg-cardbackground px-4 py-2 hover:scale-105 border-[0.5px] border-gray-700 rounded-md"
            >
              Setup now
            </button>
          </div>
        </div>
      ))}

      {showModal && selectedCard && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-cardbackground rounded-lg p-6 w-[50%] text-center text-white">
            <h2 className="text-2xl font-bold mb-4">{selectedCard.title} Running on alpha version </h2>
            <p className="text-md mb-4">version 3.1</p>
            <div className={`flex justify-center items-center mx-auto font-semibold text-gray-500 mt-2 ${selectedCard.bgColor} bg-opacity-10 w-36 h-36 rounded-full`}>
              <div className="w-28 h-28">
                <img src={selectedCard.image} alt={selectedCard.title} className="hover:scale-125" />
              </div>
            </div>
            <button
              onClick={handleCloseModal}
              className="bg-cardbackground px-4 py-2 hover:scale-105 border-[0.5px] border-gray-700 rounded-md mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KbCard;
