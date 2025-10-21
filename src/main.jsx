import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout and Pages
import Layout from "./components/Layout.jsx";
import App from "./App.jsx";
import TaskManager from "./components/TaskManager.jsx";
import PostList from "./components/PostList.jsx";
import About from "./components/About.jsx";

// Context Provider
import { ThemeProvider } from "./context.jsx";

// Global Styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Layout wraps all pages */}
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />             {/* Home */}
            <Route path="tasks" element={<TaskManager />} /> {/* Task Manager */}
            <Route path="posts" element={<PostList />} />   {/* API Data */}
            <Route path="about" element={<About />} />      {/* About Page */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
