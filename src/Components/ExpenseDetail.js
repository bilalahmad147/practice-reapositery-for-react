import React, { useContext } from 'react';
import '../App.css';
import {TransProvider} from "./ExpenseContext";

const ExpenseDetail = () => {

    let transactions = useContext(TransProvider);
    console.log(transactions)

    return (
        <div className="expenseDetail">
            <h3>Income <br /> 0$ </h3>
            <h3>Expense <br /> 0$ </h3>
        </div>
    )
}

export default ExpenseDetail;