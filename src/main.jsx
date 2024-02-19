import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";

import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Providers/AuthProvider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <div className="max-w-screen-xl mx-auto dark:text-white">
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </HelmetProvider>
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
);
