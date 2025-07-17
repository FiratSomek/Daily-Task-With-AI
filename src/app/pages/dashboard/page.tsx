import React from "react";
import Header from "../../components/Header";
import PromptForm from "../../components/PromptForm";
import TaskList from "../../components/TaskList";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <TaskList />
    </div>
  );
};

export default Dashboard;
