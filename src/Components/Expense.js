import React from 'react';
import '../App.css';

const Expense = () => {

    const handleAdd = (e) => {
        e.preventDefault()
    }

    return (
        <div className="expense">
            <h2>ADD EXPENSE</h2>
            <hr />
            <form onSubmit={handleAdd}>
                <h2>Text</h2>
                <input className="inputExpense" placeholder="Enter Name" type="text" name="" id="" /><br />
                <h2>Amount </h2>
                <p>Income(positive) and Expense (negtive)</p>
                <input className="inputExpense" placeholder="Enter Amount" type="number" name="" id="" /><br /><br />
                <button className="addExpense" type="submit">ADD EXPENSE</button>
            </form>
        </div>
    )
}

export default Expense;