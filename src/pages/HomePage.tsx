import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Ambulance } from 'lucide-react';
import BottomNavBar from '../components/BottomNavBar';
import TopNavBar from '../components/TopNavBar';

function BloodGroupCard({ group, units }: { group: string; units: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg p-4 shadow-sm flex-1"
    >
      <h3 className="text-2xl font-bold text-gray-800">{group}</h3>
      <p className="text-gray-500 text-sm mt-1">{units} units available</p>
    </motion.div>
  );
}

function BloodBankItem({ name, distance, hours, isOpen }: { 
  name: string; 
  distance: string; 
  hours: string;
  isOpen: boolean;
}) {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ x: 10 }}
      className="flex items-center justify-between py-4"
    >
      <div>
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-500 text-sm">{distance}</p>
        <p className="text-gray-500 text-sm">{hours}</p>
      </div>
      <button 
        onClick={() => navigate('/blood-bank/1')}
        className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors"
      >
        Request
      </button>
    </motion.div>
  );
}

function HomePage() {
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
        <div className="p-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search blood banks near you"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-lg font-semibold mb-3">Available Blood Groups</h2>
          <div className="grid grid-cols-2 gap-4">
            <BloodGroupCard group="A+" units={12} />
            <BloodGroupCard group="B+" units={8} />
            <BloodGroupCard group="O+" units={15} />
            <BloodGroupCard group="AB+" units={5} />
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-lg font-semibold mb-3">Nearby Blood Banks</h2>
          <div className="space-y-2 divide-y">
            <BloodBankItem
              name="City Hospital Blood Bank"
              distance="2.5 km away"
              hours="Open 24/7"
              isOpen={true}
            />
            <BloodBankItem
              name="Red Cross Center"
              distance="3.8 km away"
              hours="Open 9:00 - 18:00"
              isOpen={true}
            />
          </div>
        </div>

        <div className="px-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/blood-request')}
            className="w-full bg-red-600 text-white py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
          >
            <Ambulance className="w-5 h-5" />
            Emergency Blood Request
          </motion.button>
        </div>

        <BottomNavBar />
      </div>
    </motion.div>
  );
}

export default HomePage;