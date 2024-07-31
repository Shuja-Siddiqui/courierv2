import React, { useEffect, useState } from "react";
import WorkFlowSelector from "../WorkFlowSelector";

const Step5 = ({
  values,
  prevStep,
  handleChange,
  handleSubmit,
  handleEmail,
  emailData,
  nextStep,
  setFormData,
}) => {
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

  const updateDeployType = () => {
    setFormData((prevValues) => ({
      ...prevValues,
      deployType: selectedConnections,
    }));
  };

  useEffect(() => {
    // values.deployType = selectedConnections;
    updateDeployType();
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
              <div className="flex flex-col">
                {/* 1 */}
                <div className="text-white flex flex-col p-6 bg-gray-800 rounded-lg">
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Enter Client Secret"
                      value={emailData.clientSecret}
                      onChange={handleEmail("clientSecret")}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Enter Refresh Token"
                      value={emailData.refreshToken}
                      onChange={handleEmail("refreshToken")}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>

                {/* 2 */}
                <h3 className="text-white text-lg font-bold mt-4">
                  Instructions to Obtain Google Client ID and Refresh Token
                </h3>
                <div className="text-white w-full h-[100px] overflow-y-scroll">
                  <p className="mt-2 text-sm font-semibold">
                    Follow these steps to get your Google Client ID and refresh
                    token for your application:
                  </p>
                  <ol className="list-decimal list-inside text-sm mt-2">
                    <li>
                      **Create a Project in Google Cloud Console:**
                      <ul className="list-disc list-inside mt-1">
                        <li>
                          Go to the{" "}
                          <a
                            href="https://console.cloud.google.com/"
                            className="text-blue-400"
                            target="_blank"
                            rel="noopener noreferrer"
                            // style={{ color: "green" }}
                          >
                            Google Cloud Console
                          </a>
                          .
                        </li>
                        <li>
                          Click on "Select a Project" at the top of the page.
                        </li>
                        <li>
                          Click "New Project" and fill in the required details
                          to create a new project.
                        </li>
                      </ul>
                    </li>
                    <li>
                      **Enable the Gmail API:**
                      <ul className="list-disc list-inside mt-1">
                        <li>
                          In your Google Cloud project, go to the{" "}
                          <a
                            href="https://console.cloud.google.com/apis/library"
                            className="text-blue-400"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            API Library
                          </a>
                          .
                        </li>
                        <li>Search for "Gmail API" and click on it.</li>
                        <li>
                          Click "Enable" to enable the Gmail API for your
                          project.
                        </li>
                      </ul>
                    </li>
                    <li>
                      **Create OAuth 2.0 Credentials:**
                      <ul className="list-disc list-inside mt-1">
                        <li>
                          Go to the{" "}
                          <a
                            href="https://console.cloud.google.com/apis/credentials"
                            className="text-blue-400"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Credentials Page
                          </a>
                          .
                        </li>
                        <li>
                          Click on "Create Credentials" and select "OAuth Client
                          ID".
                        </li>
                        <li>
                          If prompted, configure the OAuth consent screen with
                          required details.
                        </li>
                        <li>
                          Choose "Web application" for the application type.
                        </li>
                        <li>
                          Set up "Authorized JavaScript origins" and "Authorized
                          redirect URIs" as needed. For example:
                          <ul className="list-disc list-inside mt-1">
                            <li>
                              Authorized JavaScript origins:{" "}
                              <code>https://yourdomain.com</code>
                            </li>
                            <li>
                              Authorized redirect URIs:{" "}
                              <code>https://yourdomain.com/oauth2callback</code>
                            </li>
                          </ul>
                        </li>
                        <li>
                          Click "Create" and note down your{" "}
                          <strong>Client ID</strong> and{" "}
                          <strong>Client Secret</strong>.
                        </li>
                      </ul>
                    </li>
                    <li>
                      **Obtain Refresh Token (Using OAuth 2.0 Authorization Code
                      Flow):**
                      <ul className="list-disc list-inside mt-1">
                        <li>
                          Use an OAuth 2.0 library or tool to handle the
                          authorization code flow, such as{" "}
                          <a
                            href="https://developers.google.com/identity/protocols/oauth2"
                            className="text-blue-400"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Google's OAuth2 documentation
                          </a>
                          .
                        </li>
                        <li>
                          Generate an authorization URL using your client ID and
                          secret, and include the `access_type=offline`
                          parameter to request a refresh token.
                        </li>
                        <li>
                          Direct the user to this authorization URL to log in
                          and authorize your application.
                        </li>
                        <li>
                          After authorization, you will receive an authorization
                          code. Exchange this code for tokens using a POST
                          request to Google's token endpoint:
                        </li>
                        <ul className="list-disc list-inside mt-1">
                          <li>
                            Endpoint:{" "}
                            <code>https://oauth2.googleapis.com/token</code>
                          </li>
                          <li>
                            Parameters: <code>code</code>,{" "}
                            <code>client_id</code>, <code>client_secret</code>,{" "}
                            <code>redirect_uri</code>,{" "}
                            <code>grant_type=authorization_code</code>
                          </li>
                        </ul>
                        <li>
                          In the response, you will get the{" "}
                          <strong>access token</strong> and{" "}
                          <strong>refresh token</strong>. Note them down
                          securely.
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : values?.agentType === "Audit" ? (
        <div>
          <WorkFlowSelector setFormData={setFormData} />{" "}
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
      {values?.agentType === "Audit" ? (
        <button
          onClick={handleSubmit}
          className="bg-white text-black font-medium rounded py-2 px-4"
        >
          Deploy
        </button>
      ) : (
        <button
          onClick={nextStep}
          className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Next
        </button>
      )}
    </>
  );
};

export default Step5;
