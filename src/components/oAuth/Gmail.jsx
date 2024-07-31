import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";

const CLIENT_ID =
  "725445279647-9pdvcb0dkvv73kaeolbkdbbif351ddpe.apps.googleusercontent.com";
const API_KEY = "AIzaSyD26u_CvXsu18aEieDltthPKIEPS51ovxM";
const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest",
];
const SCOPES = "https://www.googleapis.com/auth/gmail.readonly";

const Gmail = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    function start() {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
          redirect_uri: "https://normal-ai.vercel.app/gmail", // Ensure this matches your registered URI
        })
        .then(() => {
          const authInstance = gapi.auth2.getAuthInstance();
          authInstance.isSignedIn.listen(setSignedIn);
          setSignedIn(authInstance.isSignedIn.get());
        });
    }
    gapi.load("client:auth2", start);
  }, []);

  const handleAuthClick = () => {
    gapi.auth2.getAuthInstance().signIn({
      ux_mode: "redirect",
      redirect_uri: "https://normal-ai.vercel.app/gmail", // Ensure this matches your registered URI
    });
  };

  const handleSignoutClick = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

  const listMessages = async () => {
    const response = await gapi.client.gmail.users.messages.list({
      userId: "me",
      labelIds: "INBOX",
      maxResults: 10,
    });
    setEmails(response.result.messages);
  };

  const getEmailDetails = async (id) => {
    const response = await gapi.client.gmail.users.messages.get({
      userId: "me",
      id: id,
    });
    return response.result;
  };

  useEffect(() => {
    if (signedIn) {
      listMessages();
    }
  }, [signedIn]);

  return (
    <div>
      {signedIn ? (
        <div>
          <button onClick={handleSignoutClick}>Sign Out</button>
          <h3>Emails:</h3>
          <ul>
            {emails.map((email) => (
              <li key={email.id} onClick={() => getEmailDetails(email.id)}>
                Email ID: {email.id}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <button onClick={handleAuthClick}>Sign In</button>
      )}
    </div>
  );
};

export default Gmail;
