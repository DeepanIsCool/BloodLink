import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, MapPin, History, User } from 'lucide-react';

const BottomNavBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getButtonClass = (path: string) => {
    return location.pathname === path ? 'flex flex-col items-center text-red-600' : 'flex flex-col items-center text-gray-600';
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t max-w-lg mx-auto">
      <div className="flex justify-around py-3">
        <button className={getButtonClass('/')} onClick={() => navigate('/')}>
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className={getButtonClass('/nearby')} onClick={() => navigate('/nearby')}>
          <MapPin className="w-6 h-6" />
          <span className="text-xs mt-1">Nearby</span>
        </button>
        <button className={getButtonClass('/history')} onClick={() => navigate('/history')}>
          <History className="w-6 h-6" />
          <span className="text-xs mt-1">History</span>
        </button>
        <button className={getButtonClass('/donor-registration')} onClick={() => navigate('/donor-registration')}>
          <User className="w-6 h-6" />
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNavBar;