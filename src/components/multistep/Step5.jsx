import React, { useState } from "react";
import WorkFlowSelector from "../WorkFlowSelector";

const Step5 = ({ values, prevStep, handleSubmit, handleChange }) => {
  const [selectedConnections, setSelectedConnections] = useState({
    Website: false,
    Email: false,
  });
  const technologies = ["React", "Angular", "Vue", "Svelte", "Ember"];

  const handleConnectionTypeSelection = (type) => {
    setSelectedConnections((prevSelected) => ({
      ...prevSelected,
      [type]: !prevSelected[type],
    }));
  };

  useEffect(() => {
    values.deployType = selectedConnections;
  }, [selectedConnections]);

  const codeSnippet = `
    <!-- Chatbot Button -->
<div id="chatbot-button" style="position: fixed; bottom: 20px; right: 20px; z-index: 1000;">
  <button
    style="
      background-color: #B31F13;
      color: white;
      border: none;
      border-radius: 50px;
      width: 120px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      font-family: 'Manrope', sans-serif;
      font-size: 16px;
      cursor: pointer;
    "
    onclick="document.getElementById('chatbot-modal').style.display='block'"
  >
    Support
  </button>
</div>

<!-- Chatbot Modal -->
<div id="chatbot-modal" style="display: none; position: fixed; inset: 0; z-index: 1000;">
  <div style="position: absolute; padding: 20px; background: white; width: 100%; max-width: 400px; height: 70%; max-height: 600px; top: 20%; right: 12%; border-radius: 10px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">
    <button
      style="position: absolute; top: 10px; right: 10px; background: transparent; border: none; font-size: 20px; cursor: pointer;"
      onclick="document.getElementById('chatbot-modal').style.display='none'"
    >
      &times;
    </button>
    <div id="chatbot-container" style="font-family: 'Manrope', sans-serif; height: calc(100% - 0px); display: flex; flex-direction: column;">
      <header style="background-color: #B31F13; color: white; padding: 10px; border-radius: 10px 10px 0 0;">
        <h3 style="margin: 0;">RAVEN FORCE</h3>
      </header>
      <div id="chatbot-messages" style="flex: 1; border: 1px solid #ccc; padding: 10px; border-radius: 0 0 10px 10px; overflow-y: auto; background-color: #f9f9f9;">
        <div style="margin-bottom: 10px;">
          <p style="background-color: #f1f1f1; padding: 10px; border-radius: 5px;">Hello! How can I assist you today?</p>
        </div>
        <!-- Chat messages will go here -->
      </div>
      <footer style="padding: 10px; display: flex; gap: 10px; border-top: 1px solid #ccc; background-color: white;">
        <input
          id="chatbot-input"
          type="text"
          placeholder="Type your message..."
          style="width: calc(100% - 40px); padding: 10px; border: 1px solid #ccc; border-radius: 5px; margin-right: 10px;"
        />
        <button
          onclick="sendMessage()"
          style="background-color: #B31F13; color: white; border: none; border-radius: 5px; padding: 10px; cursor: pointer; display: flex; align-items: center; justify-content: center;"
        >
          &#x27A4;
        </button>
      </footer>
    </div>
  </div>
</div>

<script>
  const apiKey = '${values.apiKey}';
  const chatbotName = 'RAVEN FORCE';
  const welcomeMessage = 'Hello! How can I assist you today?';
  const sessionId = '123e4567-e89b-12d3-a456-426614174000';

  async function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value;
    if (!message) return;

    const messageContainer = document.getElementById('chatbot-messages');
    const userMessage = document.createElement('div');
    userMessage.innerHTML = \`<p style="background-color: #e1e1e1; padding: 10px; border-radius: 5px;">\${message}</p>\`;
    messageContainer.appendChild(userMessage);

    input.value = '';

    const response = await fetch('http://192.168.0.120:3100/courier-chat-bot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
      },
      body: JSON.stringify({ question: message, session_id: sessionId })
    });

    const data = await response.json();
    const botMessage = document.createElement('div');
    botMessage.innerHTML = \`<p style="background-color: #f1f1f1; padding: 10px; border-radius: 5px;">\${data.answer}</p>\`;
    messageContainer.appendChild(botMessage);
    messageContainer.scrollTop = messageContainer.scrollHeight;

    // Ask if the user's query was resolved
    const resolvedMessage = document.createElement('div');
    resolvedMessage.innerHTML = \`<p style="background-color: #f1f1f1; padding: 10px; border-radius: 5px;">Was your query resolved? Type "yes" or "no".</p>\`;
    messageContainer.appendChild(resolvedMessage);
  }

  document.getElementById('chatbot-input').addEventListener('keydown', async function(event) {
    if (event.key === 'Enter') {
      const message = event.target.value.toLowerCase().trim();
      if (message === 'yes' || message === 'no') {
        const messageContainer = document.getElementById('chatbot-messages');
        const userMessage = document.createElement('div');
        userMessage.innerHTML = \`<p style="background-color: #e1e1e1; padding: 10px; border-radius: 5px;">\${message}</p>\`;
        messageContainer.appendChild(userMessage);

        if (message === 'no') {
          await fetch('http://192.168.0.120:3100/generate/ticket', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + apiKey
            },
            body: JSON.stringify({ session_id: sessionId })
          });

          const ticketMessage = document.createElement('div');
          ticketMessage.innerHTML = \`<p style="background-color: #f1f1f1; padding: 10px; border-radius: 5px;">A ticket has been generated for further assistance.</p>\`;
          messageContainer.appendChild(ticketMessage);
        } else {
          const thankYouMessage = document.createElement('div');
          thankYouMessage.innerHTML = \`<p style="background-color: #f1f1f1; padding: 10px; border-radius: 5px;">Thank you! If you have any other questions, feel free to ask.</p>\`;
          messageContainer.appendChild(thankYouMessage);
        }

        event.target.value = '';
      } else {
        sendMessage();
      }
    }
  });
</script>`;
  // workFLow
  const WorkFlow = ["POD Audit 3.1", "POD Audit BETA"];

  return (
    <>
      {/* suuport start */}
      {values?.agentType === "Support" ? (
        <div>
          <h2 className="text-white text-2xl font-bold mb-6 text-center ">
            Deploy
          </h2>

          <div className="mb-4 flex flex-col justify-start gap-2">
            <label className="text-white mr-4">
              <input
                type="checkbox"
                checked={selectedConnections.Website}
                onChange={() => handleConnectionTypeSelection("Website")}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-gray-600 focus:ring-2 mr-2"
              />
              Website
            </label>
            <label className="text-white ">
              <input
                type="checkbox"
                checked={selectedConnections.Email}
                onChange={() => handleConnectionTypeSelection("Email")}
                className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600  focus:ring-2 mr-2"
              />
              Email
            </label>
          </div>

          <div className="w-full flex justify-center">
            {selectedConnections.Website === true && (
              <div className="flex space-x-4 p-6 bg-gray-800 rounded-lg">
                {technologies.map((tech) => (
                  <button
                    key={tech}
                    className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    {tech}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="w-full flex justify-center">
            {selectedConnections.Website === true && (
              <div>
                <h2 className="text-white text-xl font-bold mb-4">
                  Your Chatbot Code
                </h2>
                <textarea
                  readOnly
                  value={codeSnippet}
                  rows={5}
                  className="w-full p-2 border rounded"
                ></textarea>
                <h3 className="text-white text-lg font-bold mt-4">
                  Instructions:
                </h3>
                <div className="text-white w-full h-[100px] overflow-y-scroll">
                  <p className="mt-2 text-sm font-semibold">
                    Copy and paste the above code into your website's HTML to
                    add the chatbot button.
                  </p>

                  <ol className="list-decimal list-inside text-sm mt-2">
                    <li>
                      Open your website's HTML file where you want the chatbot
                      button to appear.
                    </li>
                    <li>
                      Paste the entire code snippet before the closing{" "}
                      <code>&lt;/body&gt;</code> tag.
                    </li>
                    <li>
                      Save the changes to your HTML file and open your website
                      in a browser to see the chatbot button in the bottom right
                      corner.
                    </li>
                    <li>
                      Click the "Chat" button to open the chatbot modal and
                      interact with it.
                    </li>
                  </ol>
                </div>
              </div>
            )}
          </div>

          <div className="w-full flex justify-center">
            {selectedConnections.Email === true && (
              <div className="text-white flex space-x-4 p-6 bg-gray-800 rounded-lg">
                Please Select Email
              </div>
            )}
          </div>
        </div>
      ) : values?.agentType === "Audit" ? (
        <div>
          <WorkFlowSelector />{" "}
        </div>
      ) : (
        <div className="w-full flex justify-center items-center h-screen flex-col">
          <div className="text-red-500 text-xl font-bold">
            Error: You haven't selected an agent type.
          </div>
          <div>
            <button
              onClick={prevStep}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            >
              Prev
            </button>
          </div>
        </div>
      )}
      {/* support End */}
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
    </>
  );
};

export default Step5;
