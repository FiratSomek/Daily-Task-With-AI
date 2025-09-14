"use client";

import Link from "next/link";
import { useState } from "react";
import { CiMenuBurger, CiSettings, CiUser } from "react-icons/ci";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <Link href="/">
        <h1 className="text-xl font-bold">AI TASK APPLICATION</h1>
      </Link>

      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-full hover:bg-gray-200 transition"
        >
          <img
            src="https://i.pravatar.cc/40"
            alt="Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="font-medium">Fırat</span>
          <CiMenuBurger className="w-4 h-4 ml-1" />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
            <ul className="py-1">
              <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                <CiUser className="w-4 h-4" /> Profil
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                <CiSettings className="w-4 h-4" /> Ayarlar
              </li>
              <Link href="/">
                <li className="px-4 py-2 hover:bg-gray-100 text-red-500">
                  Çıkış Yap
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
