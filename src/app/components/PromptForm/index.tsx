"use client";
import React, { useState } from "react";

const PromptForm = () => {
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!prompt.trim()) {
      setError("Prompt cannot be empty!");
      return;
    }
    setError("");
    setPrompt("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto bg-white shadow-md rounded-lg p-4 space-y-4 mt-10"
    >
      <label className="block text-sm font-medium text-gray-700">
        Enter Your Prompt
      </label>
      <textarea
        id="prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full border border-gray-300 rounded-md resize-none p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
        rows={5}
        placeholder="Type your prompt here..."
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Send
      </button>
    </form>
  );
};

export default PromptForm;
