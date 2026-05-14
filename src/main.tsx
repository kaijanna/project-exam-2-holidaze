import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { AuthProvider } from "./context/AuthContext";

import './styles/base.css';
import './styles/layout.css';
import './styles/navbar.css';
import './styles/auth.css';
import './styles/venues.css';
import './styles/bookingcard.css';
import './styles/profile.css';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
