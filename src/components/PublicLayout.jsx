import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './common/Header';

const PublicLayout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      {/* We can add the footer here */}
    </div>
  );
};

export default PublicLayout;