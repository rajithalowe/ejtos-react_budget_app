import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { expenses,currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: 
            <label id='currency'>
                    {currency}
                </label>
                {totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;
