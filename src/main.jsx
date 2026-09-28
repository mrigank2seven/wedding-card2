import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { site } from "./data/site.config";
import { applyTheme } from "./lib/theme";
import { LanguageProvider } from "./lib/LanguageContextProvider";
import { ErrorBoundary } from "./components/ErrorBoundary";
import "./index.css";
import App from "./App.jsx";

applyTheme(site);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ErrorBoundary>
  </StrictMode>,
);
