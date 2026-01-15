import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Error from "./pages/Error";
import Resume from "./features/resume/pages/ResumeLanding";
import Layout from "./features/resume/pages/ResumeLayout";
import Dashboard from "./features/resume/pages/Dashboard";
import ResumeBuilder from "./features/resume/pages/ResumeBuilder";
import Login from "./features/auth/pages/Login";
import Signup from "./features/auth/pages/SignUp";
import CompanyDashboard from "./features/company/pages/CompanyDashboard";
import PostJob from "./features/company/pages/PostJob";
import Applications from "./features/company/pages/Applications";
import ManageJobs from "./features/company/pages/ManageJobs";
import JobsPage from "./features/jobs/JobsPage";
import ScrollToTop from "./hooks/ScrollToTop";
import ProtectedRoute from "./components/common/ProtectedRoute";
import { Toaster } from "react-hot-toast";



const App = () => {
  useEffect(() => { }, []);

  return (
    <BrowserRouter>
      <Toaster />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resume" element={<Resume />} />
        <Route path='/app' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='builder/:resumeId' element={<ResumeBuilder />} />
        </Route>

        <Route path="/jobs" element={<ProtectedRoute><JobsPage /></ProtectedRoute>} />

        {/* Company Routes */}
        <Route path="/company" element={<Navigate to="/company/dashboard" replace />} />
        <Route path="/company/dashboard" element={<CompanyDashboard />} />
        <Route path="/company/post-job" element={<PostJob />} />
        <Route path="/company/applications" element={<Applications />} />
        <Route path="/company/manage-jobs" element={<ManageJobs />} />
        {/* <Route path='view/:resumeId' element={<Preview />} /> */}

        <Route path="*" element={<Error />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
