"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const AIScreen = () => {
  const prompt = useSelector((state: RootState) => state.prompt.value);
  console.log(prompt);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">AI Görev Paneli</h1>
      <p>{prompt || "Henüz bir prompt girilmedi."}</p>
    </div>
  );
};

export default AIScreen;
