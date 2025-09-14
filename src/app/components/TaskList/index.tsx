"use client";
import React from "react";
import { useAppSelector, useAppDispatch } from "../../../../store/hooks";
import { removeTask } from "../../../../store/features/tasks/taskSlice";

const TaskList = () => {
  const tasks = useAppSelector((state) => state.task.tasks);
  const dispatch = useAppDispatch();
  const handleRemove = (id: number) => {
    dispatch(removeTask(id));
  };
  return (
    <div className="w-full bg-white shadow-md rounded-lg mt-10 p-4 max-w-2xl mx-auto space-y-4">
      <h1 className="text-2xl font-semibold text-center">Task List</h1>
      {tasks.length === 0 && (
        <p className="text-gray-500 text-center">No Task Yet..</p>
      )}
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center m-5 p-3 border sborder-gray-300 rounded-md"
          >
            <span className="tracking-wider font-mono bold break-words whitespace-normal max-w-[80%]">
              {task.text}
            </span>
            <button
              onClick={() => handleRemove(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
