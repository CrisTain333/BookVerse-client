import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./redux/store.ts";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster
        position="top-right"
        containerStyle={{
          // Add space at the top
          marginTop: "5rem",
        }}
        toastOptions={{
          duration: 4000,
          success: {
            iconTheme: {
              primary: "#4caf50",
              secondary: "#ffffff",
            },
          },
          error: {
            iconTheme: {
              primary: "#f44336",
              secondary: "#ffffff",
            },
          },
        }}
      />
      <App />
    </Provider>
  </React.StrictMode>
);
