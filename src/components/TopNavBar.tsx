import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import NotificationPopup from './NotificationPopup';

const TopNavBar: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="relative p-4 flex justify-between items-center border-b bg-white max-w-lg mx-auto">
      <h1 className="text-xl font-bold">
        <span className="text-red-600">Blood</span>Link
      </h1>
      <div className="relative">
        <button
          className="p-2 hover:bg-gray-100 rounded-full"
          title="Notifications"
          onClick={toggleNotifications}
        >
          <Bell className="w-6 h-6 text-gray-600" />
        </button>
        <AnimatePresence>
          {showNotifications && <NotificationPopup onClose={toggleNotifications} />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TopNavBar;