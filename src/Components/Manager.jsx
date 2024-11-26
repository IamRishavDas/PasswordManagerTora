import React, { useState, useEffect } from "react";

const Manager = () => {
  const [form, setform] = useState({ url: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const savePassword = () => {
    if(form.url === "" || form.username === "" || form.password === "") return;
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    setform({ url: "", username: "", password: "" }); // Clear input fields
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleCopy = (password) => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  // Delete all passwords from localStorage and reset the password array
  const handleDeleteAll = () => {
    if (window.confirm("Are you sure you want to delete all stored passwords?")) {
      localStorage.removeItem("passwords");
      setPasswordArray([]);
    }
  };

  return (
    <>
      {/* Background Design */}
      <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pb-20">
        {/* Main Container */}
        <div className="container mx-auto max-w-7xl p-10 mt-10">
          {/* Stylish Image */}
          <div className="relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ml-10">
            <img
              src="https://www.pngmart.com/files/22/Password-PNG-Transparent.png"
              alt="Password Manager"
              className="w-96 h-auto m-auto object-cover rounded-lg border-gray-800 transition-all duration-300"
            />
          </div>

          {/* Input Fields */}
          <div className="text-gray-300 flex flex-col space-y-6 mt-10">
            <input
              value={form.url}
              onChange={handleChange}
              name="url"
              type="text"
              placeholder="Enter Website URL or Name"
              className="w-full px-5 py-3 bg-gray-800 text-gray-300 border border-gray-600 rounded-3xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />

            <div className="flex gap-4 items-center relative">
              <input
                value={form.username}
                onChange={handleChange}
                name="username"
                type="text"
                placeholder="Enter Username"
                className="w-full px-5 py-3 bg-gray-800 text-gray-300 border border-gray-600 rounded-3xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              />
              <div className="relative w-full">
                <input
                  value={form.password}
                  onChange={handleChange}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-5 py-3 bg-gray-800 text-gray-300 border border-gray-600 rounded-3xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-200"
                >
                  {showPassword ? "hide" : "show"}
                </button>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <button
              onClick={savePassword}
              className="w-full py-3 bg-purple-700 hover:bg-purple-600 text-white font-semibold rounded-3xl shadow-md transition duration-300 transform hover:scale-105"
            >
              Save
            </button>
          </div>
        </div>

        {/* Passwords Table */}
        <div className="passwords mt-10 px-5">
          <h2 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse mb-8">
            Your Passwords
          </h2>
          <div className="overflow-x-auto rounded-lg shadow-2xl">
            <table className="table-auto w-full max-w-5xl mx-auto border-collapse bg-gray-900 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                  <th className="text-center px-8 py-4 text-lg">Website</th>
                  <th className="text-center px-8 py-4 text-lg">Username</th>
                  <th className="text-center px-8 py-4 text-lg">Password</th>
                  <th className="text-center px-8 py-4 text-lg">Action</th>
                </tr>
              </thead>
              <tbody>
                {passwordArray.map((entry, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-700 transition duration-200 text-gray-300"
                  >
                    <td className="px-8 py-4 border-b border-gray-700 text-center">
                      {entry.url}
                    </td>
                    <td className="px-8 py-4 border-b border-gray-700 text-center">
                      {entry.username}
                    </td>
                    <td className="px-8 py-4 border-b border-gray-700 text-center">
                      {entry.password}
                    </td>
                    <td className="px-8 py-4 border-b border-gray-700 text-center">
                      <button
                        onClick={() => handleCopy(entry.password)}
                        className="px-4 py-2 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
                      >
                        Copy
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Delete All Button */}
        <div className="text-center mt-10">
          <button
            onClick={handleDeleteAll}
            className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-3xl shadow-md transition duration-300 transform hover:scale-105"
          >
            Delete All Passwords
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
