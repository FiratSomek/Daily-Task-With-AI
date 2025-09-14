"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import PromptForm from "@/app/components/PromptForm";
import Header from "@/app/components/Header";

const AIScreen = () => {
  const prompt = useSelector((state: RootState) => state.prompt.value);
  console.log(prompt);
  return (
    <div>
      <Header />
      <p>{prompt || "Henüz bir prompt girilmedi."}</p>
      <PromptForm />
    </div>
  );
};

export default AIScreen;
