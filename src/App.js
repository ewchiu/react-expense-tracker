import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  { 
    id: 'e1', 
    title: 'Car Insurance', 
    amount: 295.67, 
    date: new Date(2021, 4, 16) 
  },
  { 
    id: 'e2', 
    title: 'Toilet Paper', 
    amount: 13.45, 
    date: new Date(2021, 5, 11) 
  },
  { 
    id: 'e3', 
    title: 'RTX 3070', 
    amount: 605.67, 
    date: new Date(2021, 4, 6) 
  },
  {
    id: 'e4', 
    title: 'Gym Membership', 
    amount: 35.98, 
    date: new Date(2021, 4, 18) 
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
