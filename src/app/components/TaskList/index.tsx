import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

const TaskList = () => {
  const [promptList, setPromptList] = useState<string[]>([]);
  const prompt = useSelector((state: RootState) => state.prompt.value);
  useEffect(() => {
    if (prompt && !promptList.includes(prompt)) {
      setPromptList((prevList) => [...prevList, prompt]);
    }
  }, [prompt]);
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Task List</h2>
      <ul className="list-disc list-inside space-y-2">
        {promptList.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
