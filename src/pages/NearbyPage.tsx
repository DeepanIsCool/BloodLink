import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import BottomNavBar from '../components/BottomNavBar';
import TopNavBar from '../components/TopNavBar';
import { useNavigate } from 'react-router-dom';

const bloodBanks = [
  {
    id: 1,
    name: 'City Hospital Blood Bank',
    distance: '2.5',
    address: '123 Healthcare Avenue, Medical District',
    phone: '+1 234 567 8900',
    hours: 'Open 24/7',
    availability: {
      'A+': 12,
      'B+': 8,
      'O+': 15,
      'AB+': 5
    }
  },
  {
    id: 2,
    name: 'Red Cross Center',
    distance: '3.8',
    address: '456 Lifeline Street, Downtown',
    phone: '+1 234 567 8901',
    hours: '9:00 - 18:00',
    availability: {
      'A+': 8,
      'B+': 15,
      'O+': 10,
      'AB+': 3
    }
  },
  {
    id: 3,
    name: 'Metropolitan Blood Center',
    distance: '4.2',
    address: '789 Health Boulevard, Uptown',
    phone: '+1 234 567 8902',
    hours: '8:00 - 20:00',
    availability: {
      'A+': 20,
      'B+': 5,
      'O+': 12,
      'AB+': 7
    }
  }
];

function NearbyPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      <TopNavBar />
      <div className="max-w-lg mx-auto bg-white min-h-screen pb-20">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <MapPin className="w-6 h-6 text-red-600" />
            Nearby Blood Banks
          </h1>
        </div>

        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by location..."
              className="w-full p-4 pl-12 pr-4 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <MapPin className="w-5 h-5 absolute left-4 top-4 text-gray-400" />
          </div>
        </div>

        <div className="p-4 space-y-4">
          {bloodBanks.map((bank) => (
            <motion.div
              key={bank.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-md p-4 border"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-lg font-semibold text-gray-800">{bank.name}</h2>
                <div className="flex items-center text-red-600">
                  <Navigation className="w-4 h-4 mr-1" />
                  <span className="text-sm">{bank.distance} km</span>
                </div>
              </div>

              <div className="space-y-2 text-gray-600 text-sm mb-4">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{bank.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>{bank.phone}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{bank.hours}</span>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 mt-3">
                {Object.entries(bank.availability).map(([group, units]) => (
                  <div key={group} className="text-center p-2 bg-gray-50 rounded">
                    <div className="font-semibold text-gray-800">{group}</div>
                    <div className="text-sm text-gray-600">{units} units</div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => navigate('/blood-request')}
                            className="w-full bg-red-600 text-white py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                          >
                            Request Blood
                          </motion.button>
                        </div>
            </motion.div>
          ))}
        </div>

        <BottomNavBar />
      </div>
    </motion.div>
  );
}

export default NearbyPage;