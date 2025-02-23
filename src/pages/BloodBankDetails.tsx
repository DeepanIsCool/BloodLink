import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Clock, Crop as Drop } from 'lucide-react';

function BloodBankDetails() {
  const navigate = useNavigate();
  useParams();

  const bloodGroups = [
    { group: 'A+', units: 12, status: 'Available' },
    { group: 'B+', units: 8, status: 'Low' },
    { group: 'O+', units: 15, status: 'Available' },
    { group: 'AB+', units: 5, status: 'Critical' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      <div className="max-w-lg mx-auto bg-white min-h-screen">
        <div className="relative h-48">
          <img
            src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Blood Bank"
            className="w-full h-full object-cover"
          />
          <button
            title="Go back"
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-lg"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">City Hospital Blood Bank</h1>
          
          <div className="mt-4 space-y-3">
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2" />
              <span>123 Healthcare Avenue, Medical District</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Phone className="w-5 h-5 mr-2" />
              <span>+1 234 567 8900</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 mr-2" />
              <span>Open 24/7</span>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Blood Inventory</h2>
            <div className="grid grid-cols-2 gap-4">
              {bloodGroups.map(({ group, units, status }) => (
                <motion.div
                  key={group}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg p-4 shadow-sm border"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl font-bold">{group}</span>
                    <Drop
                      className={`w-5 h-5 ${
                        status === 'Available'
                          ? 'text-green-500'
                          : status === 'Low'
                          ? 'text-yellow-500'
                          : 'text-red-500'
                      }`}
                    />
                  </div>
                  <p className="text-sm text-gray-500">{units} units</p>
                  <p
                    className={`text-sm ${
                      status === 'Available'
                        ? 'text-green-500'
                        : status === 'Low'
                        ? 'text-yellow-500'
                        : 'text-red-500'
                    }`}
                  >
                    {status}
                  </p>
                </motion.div>
              ))}
            </div>
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
        </div>
      </div>
    </motion.div>
  );
}

export default BloodBankDetails;