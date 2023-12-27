
import ReactDOM from "react-dom/client";
import "./index.css";
import MainRoute from "./Routes/MainRoute.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <DndProvider backend={HTML5Backend}>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <MainRoute />
        <Toaster />
      </HelmetProvider>
    </QueryClientProvider>
  </AuthProvider>
  </DndProvider>
);
