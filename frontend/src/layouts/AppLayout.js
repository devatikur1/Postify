import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AppLayout() {
  const NAV_ITEMS = [
    { name: "Home", path: "/" },
    { name: "Create Post", path: "/create-post" },
  ];
  return (
    <figure className="w-screen h-screen overflow-x-hidden overflow-y-auto bg-bg *:text-textPrimary">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold tracking-tight">
            Post<span className="text-accent">ify</span>
          </NavLink>

          <nav className="flex items-center gap-4">
            {/* Navigation */}
            <ul className="flex items-center gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <NavLink
                    end={item.path === "/"}
                    to={item.path}
                    className={({ isActive }) =>
                      `rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-accent text-white"
                          : "text-textMuted hover:bg-hover hover:text-textPrimary"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </figure>
  );
}
