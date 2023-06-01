import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const {dispatch,currency,expenses } = useContext(AppContext);
    const [budget,setBudget] = useState('');
    const submitEvent = () => {
        if(budget > 20000) {
            alert("The value cannot exceed 20000");
            setBudget("");
            return;
        } 
        if(budget < expenses) {
            alert("The value cannot be less than Expenses");
            setBudget("");
            return;
        }    
   
    dispatch({
        type: 'SET_BUDGET',
        payload: budget,
    });
};
    return (
        <div className='alert alert-secondary'>
            <span>Budget: 
                <label id='currency'>
                    {currency}
                </label>
                <input
                        required='required'
                        type='number'
                        
                        step="10"
                        id='budget'
                        value={budget}
                        style={{ marginLeft: '2rem', size: 1 }}
                        onChange={(event) => setBudget(event.target.value)}
                        onClick={submitEvent}>
                        </input></span>
        </div>
    );
};
export default Budget;