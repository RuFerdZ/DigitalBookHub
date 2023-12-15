import React, { useState } from "react";
import loginUser from "./api/loginUser";
import { getUser } from "./api/getApi";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    // if (username && password) {
    //   setLoggedIn(true);
    // } else {
    //   alert("Please enter both username and password.");
    // }
    try {
      const response = await loginUser({ username, password });
      const user = await getUser(username);
      if (response) {
        const token = response.token;
        // const userData = { token, ...user[0] };
        sessionStorage.setItem("userData", user[0]);
        localStorage.setItem("token", token);
        setLoggedIn(true);
        navigate(`../userprofile/${user[0].id}`);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    // <div className="max-w-2xl mx-auto">
    <div className="p-8 rounded shadow-md" style={{ height: "92vh" }}>
      {sessionStorage.getItem("token") ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Welcome, {username}!</h2>
          <p>You are now logged in.</p>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto mt-16" style={{ height: "92vh" }}>
          <div className="bg-white shadow-md border mx-auto border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-600 dark:border-gray-700">
            <form className="space-y-6" action="#">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign in to our platform
              </h3>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="text-sm ml-3">
                    <label
                      htmlFor="remember"
                      className="font-medium text-gray-900 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="/"
                  className="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div>
              <button
                type="button"
                onClick={handleLogin}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login to your account
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?{" "}
                <a
                  href="/"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Create account
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    // </div>
  );
};

export default LogIn;
