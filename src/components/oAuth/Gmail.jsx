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
        })
        .then(() => {
          const authInstance = gapi.auth2.getAuthInstance();
          authInstance.isSignedIn.listen(setSignedIn);
          setSignedIn(authInstance.isSignedIn.get());
        })
        .catch((e) => console.error(e));
    }
    gapi.load("client:auth2", start);
  }, []);

  const handleAuthClick = async () => {
    try {
      const authInstance = gapi.auth2.getAuthInstance();
      const googleUser = await authInstance.signIn({
        ux_mode: "popup",
        prompt: "consent", // ensure refresh token is provided
      });

      const authResponse = googleUser.getAuthResponse();

      // Log tokens to the console (for demonstration purposes only)
      console.log("Access Token:", authResponse.access_token);
      console.log("ID Token:", authResponse.id_token);

      const profile = googleUser.getBasicProfile();
      const account = profile.getEmail();
      const client_id = CLIENT_ID;
      const client_secret = "YOUR_CLIENT_SECRET";
      const expiry = new Date(authResponse.expires_at).toISOString();
      const refresh_token = authResponse.code; // this may not be directly accessible in frontend, handle backend
      const scopes = SCOPES.split(" ");
      const token = authResponse.access_token;
      const token_uri = "https://oauth2.googleapis.com/token";
      const universe_domain = "googleapis.com";

      // Construct token object
      const tokenObject = {
        account,
        client_id,
        client_secret,
        expiry,
        refresh_token,
        scopes,
        token,
        token_uri,
        universe_domain,
      };

      console.log("Token Object:", tokenObject);

      // Send tokens to backend
      //   await axios.post(
      //     "https://your-backend-server.com/store-tokens",
      //     tokenObject
      //   );

      listMessages(); // Fetch emails after sign-in
    } catch (e) {
      console.error(e);
    }
  };

  const handleSignoutClick = () => {
    gapi.auth2
      .getAuthInstance()
      .signOut()
      .catch((e) => console.error(e));
  };

  const listMessages = async () => {
    try {
      const response = await gapi.client.gmail.users.messages.list({
        userId: "me",
        labelIds: "INBOX",
        maxResults: 10,
      });
      const messages = response.result.messages;

      const emailDetails = await Promise.all(
        messages.map(async (message) => {
          const msg = await gapi.client.gmail.users.messages.get({
            userId: "me",
            id: message.id,
          });
          return msg.result;
        })
      );

      setEmails(emailDetails);
    } catch (error) {
      console.error(error);
    }
  };

  const getHeader = (headers, name) => {
    const header = headers.find((header) => header.name === name);
    return header ? header.value : "";
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
              <li key={email.id}>
                <strong>From:</strong>{" "}
                {getHeader(email.payload.headers, "From")}
                <br />
                <strong>Subject:</strong>{" "}
                {getHeader(email.payload.headers, "Subject")}
                <br />
                <strong>Snippet:</strong> {email.snippet}
                <br />
                <hr />
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
