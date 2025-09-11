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
    <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto space-y-4">
      <form onSubmit={handleSubmit}>
        <textarea
          id="task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="w-full border border-gray-300 rounded-md resize-none p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
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
