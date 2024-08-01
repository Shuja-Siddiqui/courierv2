export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const calculateChatCost = (chatData, costPerChat = 7) => {
  // Sum up the total number of chats
  const totalChats = chatData.reduce((sum, chat) => sum + chat.count, 0);
  // Calculate the total cost
  const totalCost = totalChats * costPerChat;
  return totalCost;
};
