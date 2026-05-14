import ProtectedRoute from "./routes/ProtectedRoute";
import ManagerRoute from "./routes/ManagerRoute";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import HomePage from "./pages/HomePage";
import VenueDetailsPage from "./pages/VenueDetailsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import CreateVenuePage from "./pages/CreateVenuePage";
import EditVenuePage from "./pages/EditVenuePage";
import MyBookingsPage from "./pages/MyBookingsPage";
import ManagerBookingsPage from "./pages/ManagerBookingsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="venue/:id" element={<VenueDetailsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="create-venue"
          element={
            <ManagerRoute>
              <CreateVenuePage />
            </ManagerRoute>
          }
        />
        <Route path="edit-venue/:id" element={<EditVenuePage />} />
        <Route
          path="my-bookings"
          element={
            <ProtectedRoute>
              <MyBookingsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="manager-bookings"
          element={
            <ManagerRoute>
              <ManagerBookingsPage />
            </ManagerRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
