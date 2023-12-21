import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainRoute from "./Routes/MainRoute.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
     <HelmetProvider>
     <MainRoute />
      <Toaster/>
     </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
