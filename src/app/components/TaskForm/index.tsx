"use client";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { addTask } from "../../../../store/features/tasks/taskSlice";

const TaskForm = () => {
  const [taskInput, setTaskInput] = useState("");
  const dispatch = useAppDispatch();

  const tasks = useAppSelector((state) => state.task.tasks);
  console.log(tasks);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskInput.trim()) {
      dispatch(addTask(taskInput));
      setTaskInput("");
    }
  };
  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-10 mt-10 max-w-2xl mx-auto space-y-4">
      <form onSubmit={handleSubmit}>
        <input
          id="task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="w-full border border-gray-300 rounded-md resize-none mb-5 p-2 focus:outline-none focus:ring-1 focus:ring-dark-500"
          placeholder="Type your task here..."
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
