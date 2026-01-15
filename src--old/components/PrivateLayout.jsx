import React from 'react';
import { Outlet } from 'react-router-dom';

const PrivateLayout = () => {
  return (
    <div className="min-h-screen">
      {/* यहां आप अपना प्राइवेट हेडर जोड़ सकते हैं */}
      <main>
        <Outlet />
      </main>
      {/* यहां आप अपना प्राइवेट फुटर जोड़ सकते हैं */}
    </div>
  );
};

export default PrivateLayout;