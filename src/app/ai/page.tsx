// app/ai/page.tsx veya pages/ai.tsx
"use client";
import React, { useState } from "react";
import PromptForm from "../components/PromptForm";

const AIScreen = () => {
  const [lastPrompt, setLastPrompt] = useState("");

  const handlePromptSubmit = (prompt: string) => {
    console.log("AI için gelen prompt:", prompt);
    setLastPrompt(prompt);
    // burada API'ye gönderme veya AI işlem başlatma yapılabilir
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">AI Dashboard</h1>
      <PromptForm onSubmit={handlePromptSubmit} />
      {lastPrompt && (
        <div className="mt-4 p-4 bg-gray-100 rounded shadow">
          <p className="font-medium text-gray-700">Last prompt:</p>
          <p>{lastPrompt}</p>
        </div>
      )}
    </div>
  );
};

export default AIScreen;
