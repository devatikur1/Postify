import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import PostsPage from "./pages/PostsPage";
import CreatePostPage from "./pages/CreatePostPage";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route index element={<PostsPage />} />
        <Route path="create-post" element={<CreatePostPage />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}
