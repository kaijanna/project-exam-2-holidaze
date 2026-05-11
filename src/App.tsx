import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';


import HomePage from './pages/HomePage';
import VenueDetailsPage from './pages/VenueDetailsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import CreateVenuePage from './pages/CreateVenuePage';
import EditVenuePage from './pages/EditVenuePage';
import MyBookingsPage from './pages/MybookingsPage';
import ManagerBookingsPage from './pages/ManagerBookingsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="venue/:id" element={<VenueDetailsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="create-venue" element={<CreateVenuePage />} />
        <Route path="edit-venue/:id" element={<EditVenuePage />} />
        <Route path="my-bookings" element={<MyBookingsPage />} />
        <Route path="manager-bookings" element={<ManagerBookingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;