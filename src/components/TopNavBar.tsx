import React from 'react';
import { Bell } from 'lucide-react';

const TopNavBar: React.FC = () => {
  return (
    <div className="p-4 flex justify-between items-center border-b bg-white">
      <h1 className="text-xl font-bold">
        <span className="text-red-600">Blood</span>Link
      </h1>
      <button className="p-2 hover:bg-gray-100 rounded-full" title="Notifications">
        <Bell className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
};

export default TopNavBar;