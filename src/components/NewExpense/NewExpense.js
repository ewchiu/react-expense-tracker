import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditHandler = () => {
        setIsEditing(false);
    };

    // render button and form when button is pressed
    return (
    <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && (<ExpenseForm 
            onSaveExpenseData={saveExpenseDataHandler} 
            onCancel={stopEditHandler} 
            />
        )}
    </div>
    );
};

export default NewExpense;