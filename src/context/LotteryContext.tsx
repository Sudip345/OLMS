import React, { createContext, useContext, useState } from 'react';
import { Lottery, Transaction } from '../types';

interface LotteryContextType {
  lotteries: Lottery[];
  transactions: Transaction[];
  addLottery: (lottery: Omit<Lottery, 'id' | 'participants'>) => void;
  removeLottery: (id: string) => void;
  purchaseTicket: (lotteryId: string, userId: string) => void;
  addTransaction: (transaction: Omit<Transaction, 'id' | 'date'>) => void;
}

const LotteryContext = createContext<LotteryContextType | undefined>(undefined);

export const LotteryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lotteries, setLotteries] = useState<Lottery[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addLottery = (lottery: Omit<Lottery, 'id' | 'participants'>) => {
    setLotteries([...lotteries, {
      ...lottery,
      id: Math.random().toString(36).substr(2, 9),
      participants: []
    }]);
  };

  const removeLottery = (id: string) => {
    setLotteries(lotteries.filter(lottery => lottery.id !== id));
  };

  const purchaseTicket = (lotteryId: string, userId: string) => {
    setLotteries(lotteries.map(lottery => 
      lottery.id === lotteryId 
        ? { ...lottery, participants: [...lottery.participants, userId] }
        : lottery
    ));
  };

  const addTransaction = (transaction: Omit<Transaction, 'id' | 'date'>) => {
    setTransactions([...transactions, {
      ...transaction,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString()
    }]);
  };

  return (
    <LotteryContext.Provider value={{
      lotteries,
      transactions,
      addLottery,
      removeLottery,
      purchaseTicket,
      addTransaction
    }}>
      {children}
    </LotteryContext.Provider>
  );
};

export const useLottery = () => {
  const context = useContext(LotteryContext);
  if (context === undefined) {
    throw new Error('useLottery must be used within a LotteryProvider');
  }
  return context;
};