import React, { useContext } from 'react';
import ExpenseContext from './ExpenseContext'
import '../App.css';

const History = () => {

    const HistoryContext = useContext(ExpenseContext);
    return (
        <div>
            <hr />
            <ul>
                {HistoryContext.map((tranObj, ind) => {
                    return (
                        <div key={ind}>
                            <h3 className="historyList">
                                <li>{tranObj.desc}</li>
                                <li>{tranObj.amount}$</li>
                            </h3>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default History;