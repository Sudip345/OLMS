import React from 'react';
import { Ticket, Trophy, Wallet } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Lottery Dashboard</h1>
          <p className="mt-2 text-lg text-gray-600">Welcome back! Check your tickets and winnings.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Your Balance</h2>
              <Wallet className="h-6 w-6 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-purple-600">$1,000</p>
            <p className="text-sm text-gray-500 mt-2">Available for tickets</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Active Tickets</h2>
              <Ticket className="h-6 w-6 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-purple-600">0</p>
            <p className="text-sm text-gray-500 mt-2">In current draws</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Total Winnings</h2>
              <Trophy className="h-6 w-6 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-purple-600">$0</p>
            <p className="text-sm text-gray-500 mt-2">Lifetime earnings</p>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Daily Draw',
                prize: '$10,000',
                price: '$5',
                time: '24 hours',
              },
              {
                name: 'Weekly Jackpot',
                prize: '$100,000',
                price: '$10',
                time: '7 days',
              },
              {
                name: 'Mega Millions',
                prize: '$1,000,000',
                price: '$20',
                time: '30 days',
              },
            ].map((game) => (
              <div key={game.name} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900">{game.name}</h3>
                <p className="text-2xl font-bold text-purple-600 mt-2">{game.prize}</p>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-gray-600">Ticket Price: {game.price}</p>
                  <p className="text-sm text-gray-600">Draw in: {game.time}</p>
                </div>
                <button className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                  Buy Ticket
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}