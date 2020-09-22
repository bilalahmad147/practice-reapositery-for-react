import React, { createContext, useReducer } from 'react';
import ExpenseReducer from './ExpenseReducer';

const ExpenseContext = createContext([
    { desc: 'book', amount: 20 },
    { desc: 'fee', amount: 10 },
    { desc: 'fee', amount: 10 },
]);

export default ExpenseContext;


export const TransProvider = ({ children }) => {
    let [state, dispatch] = useReducer(ExpenseReducer, ExpenseContext);

    function addTrans(transObj) {
        dispatch({
            type: "ADD",
            payload: {
                desc: transObj.desc,
                amount: transObj.amount,
            }
        })
    }

    return (
        <ExpenseContext.Provider value={
            {
                transactions : state,
                addTrans,
            }
        }>
            {children}
        </ExpenseContext.Provider>
    )
}