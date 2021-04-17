import ExpenseItem from './components/ExpenseItem'

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 295.67, date: new Date(2021, 4, 16) },
    { title: 'Toilet Paper', amount: 13.45, date: new Date(2021, 5, 11) },
    { title: 'RTX 3070', amount: 605.67, date: new Date(2021, 4, 6) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
