"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import Link from "next/link";

const TaskList = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto">
      <form>
        <textarea
          name=""
          id=""
          className="w-full border border-gray-300 rounded-md resize-none p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
          rows={2}
        ></textarea>
      </form>
      <h2 className="text-xl font-semibold mb-4 text-center">Task List</h2>
      <Link href="/pages/ai">
        <div className="text-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            AI sayfasına git
          </button>
        </div>
      </Link>
    </div>
  );
};

export default TaskList;
