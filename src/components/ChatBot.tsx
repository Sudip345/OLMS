import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { MessageSquare, Minimize2 } from 'lucide-react';

const steps = [
  {
    id: '0',
    message: 'Welcome to our Lottery System! How can I assist you today?',
    trigger: 'options',
  },
  {
    id: 'options',
    options: [
      { value: 'tickets', label: 'How to buy lottery tickets?', trigger: 'tickets-info' },
      { value: 'deposit', label: 'How to deposit funds?', trigger: 'deposit-info' },
      { value: 'withdraw', label: 'How to withdraw funds?', trigger: 'withdraw-info' },
      { value: 'winners', label: 'How are winners selected?', trigger: 'winners-info' },
      { value: 'other', label: 'Other questions', trigger: 'contact-support' },
    ],
  },
  {
    id: 'tickets-info',
    message: 'To buy lottery tickets:\n1. Ensure you have sufficient balance\n2. Browse active lotteries\n3. Click "Buy Ticket" on your chosen lottery\n4. Confirm your purchase',
    trigger: 'anything-else',
  },
  {
    id: 'deposit-info',
    message: 'To deposit funds:\n1. Go to "Manage Funds"\n2. Enter the amount you wish to deposit\n3. Click "Deposit"\n4. Follow the payment instructions',
    trigger: 'anything-else',
  },
  {
    id: 'withdraw-info',
    message: 'To withdraw funds:\n1. Go to "Manage Funds"\n2. Enter withdrawal amount\n3. Click "Withdraw"\nNote: Withdrawals depend on system liquidity',
    trigger: 'anything-else',
  },
  {
    id: 'winners-info',
    message: 'Winner selection:\n1. Admin randomly selects winner\n2. Winner receives notification\n3. Prize is automatically credited\n4. Transaction history updated',
    trigger: 'anything-else',
  },
  {
    id: 'contact-support',
    message: 'For additional support:\nEmail: support@lottery.com\nPhone: 1-800-LOTTERY\nAvailable 24/7',
    trigger: 'anything-else',
  },
  {
    id: 'anything-else',
    message: 'Is there anything else you would like to know?',
    trigger: 'final-options',
  },
  {
    id: 'final-options',
    options: [
      { value: 'yes', label: 'Yes, I have more questions', trigger: 'options' },
      { value: 'no', label: 'No, thank you', trigger: 'goodbye' },
    ],
  },
  {
    id: 'goodbye',
    message: 'Thank you for using our service! Good luck with the lottery!',
    end: true,
  },
];

export const CustomChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700"
        >
          <MessageSquare size={24} />
        </button>
      )}
      {isOpen && (
        <div className={`bg-white rounded-lg shadow-xl ${isMinimized ? 'h-14' : ''}`}>
          <div className="flex justify-end p-2 border-b">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-gray-500 hover:text-gray-700 mr-2"
            >
              <Minimize2 size={20} />
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                setIsMinimized(false);
              }}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          {!isMinimized && (
            <ChatBot
              steps={steps}
              headerTitle="Customer Support"
              floating={false}
              style={{ width: '350px' }}
              hideSubmitButton={true}
              cache={false}
            />
          )}
        </div>
      )}
    </div>
  );
};