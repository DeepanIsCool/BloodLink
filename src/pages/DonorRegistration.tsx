import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import BottomNavBar from '../components/BottomNavBar';
import TopNavBar from '../components/TopNavBar';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    title: 'Personal Information',
    fields: ['fullName', 'dateOfBirth', 'gender']
  },
  {
    title: 'Contact Details',
    fields: ['email', 'phone', 'address']
  },
  {
    title: 'Medical Information',
    fields: ['bloodGroup', 'weight', 'lastDonation']
  }
];

function DonorRegistration() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    bloodGroup: '',
    weight: '',
    lastDonation: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isStepValid = () => {
    const requiredFields = steps[currentStep].fields;
    return requiredFields.every(field => formData[field as keyof typeof formData]);
  };

  const nextStep = () => {
    if (isStepValid() && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    if (isStepValid()) {
      // Submit form logic here
      navigate('/');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-gray-50 p-4"
    >
      <TopNavBar />
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-full mr-4"
            title="Go back"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Donor Registration</h1>
        </div>

        <div className="mb-8">
          <div className="flex justify-between mb-4">
            {steps.map((_, index) => (
              <div key={index} className={`flex-1 h-3 mx-1 rounded-full ${index <= currentStep ? 'bg-red-600' : 'bg-gray-200'}`} />
            ))}
          </div>
        </div>

        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-4"
        >
          {currentStep === 0 && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-3 focus:ring-red-500 focus:border-red-500 text-lg"
                  title="Full Name"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-3 focus:ring-red-500 focus:border-red-500 text-lg"
                  title="Date of Birth"
                  placeholder="Enter your date of birth"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-3 focus:ring-red-500 focus:border-red-500 text-lg"
                  title="Gender"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </>
          )}

          {currentStep === 1 && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-3 focus:ring-red-500 focus:border-red-500 text-lg"
                  title="Email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-3 focus:ring-red-500 focus:border-red-500 text-lg"
                  title="Phone Number"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-3 focus:ring-red-500 focus:border-red-500 text-lg"
                  title="Address"
                  placeholder="Enter your address"
                  required
                />
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Blood Group</label>
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-3 focus:ring-red-500 focus:border-red-500 text-lg"
                  title="Blood Group"
                  required
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-3 focus:ring-red-500 focus:border-red-500 text-lg"
                  placeholder="Enter your weight"
                  title="Weight"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Donation Date</label>
                <input
                  type="date"
                  name="lastDonation"
                  value={formData.lastDonation}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-3 focus:ring-red-500 focus:border-red-500 text-lg"
                  title="Last Donation Date"
                  placeholder="Enter the date of your last donation"
                  required
                />
              </div>
            </>
          )}
        </motion.div>

        <div className="flex justify-between mt-8">
          <button
            onClick={prevStep}
            className={`px-8 py-3 rounded-lg ${
              currentStep === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 '
            }`}
            disabled={currentStep === 0}
          >
            Back
          </button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={currentStep === steps.length - 1 ? handleSubmit : nextStep}
            className={`px-8 py-3 text-lg rounded-lg flex items-center gap-3 ${
              isStepValid() ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!isStepValid()}
          >
            {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
      <BottomNavBar />
    </motion.div>
  );
}

export default DonorRegistration;