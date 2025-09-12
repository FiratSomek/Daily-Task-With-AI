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
    <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto space-y-4">
      <h1 className="text-xl font-semibold text-center">Task List</h1>
      {tasks.length === 0 && (
        <p className="text-gray-500 text-center">No Task Yet..</p>
      )}
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center border-b pb-1"
          >
            <span>{task.text}</span>
            <button onClick={() => handleRemove(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
