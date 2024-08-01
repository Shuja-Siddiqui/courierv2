import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SiNormalizedotcss } from "react-icons/si";
import { logoNormal } from "../assets/images";
import { FcGoogle } from "react-icons/fc";
import { gapi } from "gapi-script";
import { login } from "../api/user";

const CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID"; // Replace with your Google Client ID

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Dummy credentials
  const dummyEmail = "test@example.com";
  const dummyPassword = "password@#$123";

  const handleLogin = (e) => {
    e.preventDefault();

    login({ email: email, password })
      .then((res) => {
        console.log("res", res);
        if (res?.user_email === email) {
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("userDetails", JSON.stringify(res));
          navigate("/");
        } else {
          alert("Invalid email or password. Please try again.");
        }
      })
      .catch((err) => console.log(err));

    // Check if entered credentials match dummy credentials
    // if (email === dummyEmail && password === dummyPassword) {
    //   // Set authenticated status in localStorage
    //   localStorage.setItem("isAuthenticated", "true");
    //   // Redirect to home page
    //   navigate("/");
    // } else {
    //   alert("Invalid email or password. Please try again.");
    // }
  };

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: CLIENT_ID,
        scope: "email",
      });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  const handleGoogleLogin = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2
      .signIn()
      .then((googleUser) => {
        const profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId());
        console.log("Name: " + profile.getName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // Set authenticated status in localStorage
        localStorage.setItem("isAuthenticated", "true");
        // You can also save user details in localStorage if needed
        localStorage.setItem(
          "userProfile",
          JSON.stringify({
            id: profile.getId(),
            name: profile.getName(),
            imageUrl: profile.getImageUrl(),
            email: profile.getEmail(),
          })
        );

        // Redirect to home page
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing in with Google", error);
      });
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat">
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-3 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center mt-8">
            <img src={logoNormal} alt="" className="h-20" />
            <h1 className="mt-4 text-2xl">Normal Logistics</h1>
            {/* <span className="text-gray-300">Enter Login Details</span> */}
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="email"
                placeholder="id@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="password"
                name="password"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-8 flex flex-col gap-2 justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-3xl bg-gray-400 bg-opacity-50 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-gray-900"
              >
                Login
              </button>
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="flex justify-center items-center gap-2 rounded-3xl bg-gray-400 bg-opacity-50 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-gray-900"
              >
                <FcGoogle />
                Continue With Google
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center mt-4 gap-1 ml-8">
          <span className="text-sm text-white">Don't have an account?</span>
          <button className="text-teal-500" onClick={() => setShowModal(true)}>
            Sign Up
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl px-8 py-6 shadow-lg backdrop-blur-md">
            <div className="text-white">
              <h2 className="text-2xl mb-4">
                Have you spoken to Normal Sales?
              </h2>
              <p className="mb-4">
                Enter your invite code below otherwise book a meeting{" "}
                <a href="#" className="text-teal-500">
                  here
                </a>
                .
              </p>
              <input
                className="w-full mb-4 rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                placeholder="Invite Code"
              />
              <div className="flex justify-end">
                <button
                  className="rounded-3xl bg-gray-400 bg-opacity-50 py-2 px-4 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-gray-900"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
