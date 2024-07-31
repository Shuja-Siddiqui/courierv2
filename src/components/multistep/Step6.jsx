import React, { useState } from "react";

export default function Step6({
  values,
  prevStep,
  handleSubmit,
  emailData,
  nextStep,
}) {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [connectionStatus, setConnectionStatus] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    try {
      // const response = await axios.post("/api/chat", { message: input });
      // const botMessage = { sender: "bot", text: response.data.reply };

      const botMessage = { sender: "bot", text: "its good" };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setInput("");
  };

  const handleConnection = () => {
    setConnectionStatus("Successfully connected. The first email analyzer is following");
  };
  return (
    <>
      <div className="w-full flex justify-between">
        <div className="w-[48%] chatbot-container flex flex-col h-[60vh] max-h-[600px] bg-gray-900 rounded-2xl shadow-lg border border-light-grey">
          <header className="flex items-center px-4 py-3 bg-card rounded-t-2xl">
            <div className="flex items-center gap-2">
              <img
                src="http://placehold.it/345x230"
                width="32"
                height="32"
                alt="Company Logo"
                style={{ aspectRatio: 32 / 32, objectFit: "cover" }}
                className="rounded-full"
              />
              <span className="text-lg font-semibold text-gray-200 font-manrope">
                Testing Support
              </span>
            </div>
          </header>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 font-manrope">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ${
                  msg.sender === "user"
                    ? "ml-auto bg-gray-400 text-white"
                    : "bg-gray-200"
                }`}
              >
                <p className="text-gray-900">{msg.text}</p>
              </div>
            ))}
          </div>
          <footer className="bg-card rounded-b-2xl p-4 flex items-center gap-2">
            <form className="flex-1" onSubmit={sendMessage}>
              <input
                className="flex h-10 rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full font-manrope"
                id="message"
                placeholder="Type your message..."
                autoComplete="off"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </form>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-500 hover:bg-gray-700 text-white hover:bg-primary/90 h-10 w-10"
              type="submit"
              onClick={sendMessage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="m22 2-7 20-4-9-9-4Z"></path>
                <path d="M22 2 11 13"></path>
              </svg>
              <span className="sr-only">Send</span>
            </button>
          </footer>
        </div>

        <div className="w-[50%]">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">
            Email
          </h2>
          <button
            onClick={handleConnection}
            className="bg-white text-black font-medium rounded py-2 px-4"
          >
            Check Connection
          </button>
          <p className="text-gray-400 text-xl mt-2">{connectionStatus}</p>
        </div>
      </div>

      <div className="mt-2">
        <button
          onClick={prevStep}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
        >
          Prev
        </button>
        <button
          onClick={handleSubmit}
          className="bg-white text-black font-medium rounded py-2 px-4"
        >
          Deploy
        </button>
      </div>
    </>
  );
}
