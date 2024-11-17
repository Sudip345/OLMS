import React, { useState } from 'react';
import { Send, Bot, Minus, Plus } from 'lucide-react';
import type { ChatMessage } from '../types';

export function Chatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: 'Hello! How can I help you today?',
      sender: 'bot',
      timestamp: new Date().toISOString(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(input),
        sender: 'bot',
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('ticket')) {
      return 'You can purchase tickets from the main dashboard. We offer various lottery games with different prize pools!';
    }
    if (lowerInput.includes('win') || lowerInput.includes('prize')) {
      return 'Winners are notified via email and prizes can be claimed through your wallet. Congratulations if you won!';
    }
    if (lowerInput.includes('payment') || lowerInput.includes('deposit')) {
      return 'We accept various payment methods including credit cards and digital wallets. You can manage all payments in your wallet section.';
    }
    return 'I\'m here to help! You can ask me about tickets, prizes, payments, or any other lottery-related questions.';
  };

  return (
    <div className={`fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-300 ${isMinimized ? 'h-16' : ''}`}>
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-purple-600" />
          <h3 className="text-lg font-semibold text-gray-900">Support Chat</h3>
        </div>
        <button 
          onClick={() => setIsMinimized(!isMinimized)} 
          className="focus:outline-none hover:bg-gray-100 p-1 rounded-full"
        >
          {isMinimized ? (
            <Plus className="h-5 w-5 text-gray-500" />
          ) : (
            <Minus className="h-5 w-5 text-gray-500" />
          )}
        </button>
      </div>

      {!isMinimized && (
        <>
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}