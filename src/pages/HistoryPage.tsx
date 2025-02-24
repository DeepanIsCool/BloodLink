import { motion } from 'framer-motion';
import { History, DropletIcon, CheckCircle, XCircle, Clock } from 'lucide-react';
import BottomNavBar from '../components/BottomNavBar';
import TopNavBar from '../components/TopNavBar';

const donationHistory = [
  {
    id: 1,
    type: 'donation',
    bloodGroup: 'A+',
    date: '2024-02-15',
    location: 'City Hospital Blood Bank',
    status: 'completed',
    units: 1
  },
  {
    id: 2,
    type: 'request',
    bloodGroup: 'O+',
    date: '2024-01-10',
    location: 'Red Cross Center',
    status: 'pending',
    units: 2
  }
];

function HistoryPage() {
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
            <History className="w-6 h-6 text-red-600" />
            Donation History
          </h1>
        </div>

        <div className="p-4 space-y-4">
          {donationHistory.map((history) => (
            <motion.div
              key={history.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-md p-4 border"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-lg font-semibold text-gray-800">
                  {history.type === 'donation' ? 'Donation' : 'Request'} - {history.bloodGroup}
                </h2>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">{history.date}</span>
                </div>
              </div>

              <div className="space-y-2 text-gray-600 text-sm mb-4">
                <div className="flex items-center">
                  <DropletIcon className="w-4 h-4 mr-2" />
                  <span>{history.units} unit(s)</span>
                </div>
                <div className="flex items-center">
                  <span>{history.location}</span>
                </div>
                <div className="flex items-center">
                  {history.status === 'completed' ? (
                    <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                  ) : (
                    <XCircle className="w-4 h-4 mr-2 text-yellow-600" />
                  )}
                  <span>{history.status.charAt(0).toUpperCase() + history.status.slice(1)}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <BottomNavBar />
      </div>
    </motion.div>
  );
}

export default HistoryPage;

