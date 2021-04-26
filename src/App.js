import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  { 
    id: 'e1', 
    title: 'Protein Bar', 
    amount: 22.64, 
    date: new Date(2021, 3, 16) 
  },
  { 
    id: 'e2', 
    title: 'Toilet Paper', 
    amount: 13.45, 
    date: new Date(2021, 4, 11) 
  },
  { 
    id: 'e3', 
    title: 'Gas', 
    amount: 45.89, 
    date: new Date(2021, 2, 6) 
  },
  {
    id: 'e4', 
    title: 'Gym Membership', 
    amount: 35.98, 
    date: new Date(2021, 1, 18) 
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return ( <div>
    <NewExpense onAddExpense={addExpenseHandler} />
    <Expenses items={expenses} />
    </div>
  );
}

export default App;
