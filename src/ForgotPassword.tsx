import React, { useState } from 'react';
import { ArrowLeft, Mail } from 'lucide-react';
import { auth } from './firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import toast from 'react-hot-toast';

interface ForgotPasswordProps {
  onBack: () => void;
}

export function ForgotPassword({ onBack }: ForgotPasswordProps) {
  const [email, setEmail] = useState('');

  const handleSubmitEmail = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Reset instructions sent to your email');
      onBack();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <button
          onClick={onBack}
          className="mb-6 text-gray-600 hover:text-purple-600 flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Login
        </button>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Reset Your Password
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <button
            onClick={handleSubmitEmail}
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-200"
          >
            Send Reset Instructions
          </button>
        </div>
      </div>
    </div>
  );
}