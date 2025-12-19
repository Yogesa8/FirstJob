import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PublicLayout from './components/PublicLayout';
import PrivateLayout from './components/PrivateLayout';
import Loader from "./components/ui/Loader";
import LandingPage from "./pages/LandingPage";
import Notfound from "./components/ui/Notfound";
import LoginPage from "./components/auth/LoginPage";
import SignUp from "./components/auth/SignUp";
import Resume from "./components/resume/Resume";
import { ResumeProvider } from "./context/ResumeContext";
import Layout from "./components/layout/Layout";
import Builder from "./components/resume/Builder";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <ResumeProvider>
        <Layout>
          <Routes>
            {/* public routes */}
            <Route path="/" element={<PublicLayout />}>
              <Route index element={<LandingPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="resume" element={<Resume />} />
              <Route path="builder" element={<Builder />} />
              <Route path="*" element={<Notfound />} />
            </Route>

            {/* Private route */}
            <Route path="/" element={
              <ProtectedRoute>
                <PrivateLayout />
              </ProtectedRoute>
            }>
              {/* <Route path="builder" element={<Builder />} />
            <Route path="profile" element={<ProfileDashboard />} />
            <Route path="setting" element={<SettingsPage />} /> */}
            </Route>
          </Routes>
        </Layout>
      </ResumeProvider>
    </BrowserRouter>
  );
};

export default App;