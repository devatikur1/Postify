import React from "react";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <figure className="w-screen h-screen overflow-x-hidden overflow-y-auto bg-bg *:text-textPrimary">
      <Outlet />
    </figure>
  );
}
