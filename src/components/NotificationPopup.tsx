import React from 'react';
import { motion } from 'framer-motion';

const NotificationPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4 w-64 z-50"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">Notifications</h3>
        <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
          &times;
        </button>
      </div>
      <div className="space-y-2">
        <div className="p-2 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-800">New blood donation request received.</p>
        </div>
        <div className="p-2 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-800">Your blood donation appointment is confirmed.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default NotificationPopup;