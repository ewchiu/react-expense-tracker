import Expenses from './components/Expenses/Expenses'

const App = () => {
  const expenses = [
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
  ];
  return ( <div>
    <h2>Let's get started!</h2>
    <Expenses items={expenses} />
    </div>
  );
}

export default App;
