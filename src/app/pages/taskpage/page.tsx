import Header from "@/app/components/Header";
import TaskForm from "@/app/components/TaskForm";
import TaskList from "@/app/components/TaskList";
import React from "react";

const TaskPage = () => {
  return (
    <div>
      {" "}
      <Header />
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default TaskPage;
