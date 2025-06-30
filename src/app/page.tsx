"use client";

import Login from "./components/LoginPage/index";

export default function Home() {
  // const { user, error, isLoading } = useUser();

  return (
    <div>
      {/* <div className="">
        <h1>AI Prompt Generator</h1>
        {!user ? (
          <Link href="/api/auth/login">
            <button className="border-2 p-2 font-bold">Login</button>
          </Link>
        ) : (
          <>
            <h1>Welcome, {user.name}</h1>
            <Link href="/api/auth/logout">
              <button>Logout</button>
            </Link>
          </>
        )}
      </div> */}
      <div className="flex align-center justify-center">
        <Login />
      </div>
    </div>
  );
}
