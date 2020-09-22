import { createContext } from 'react';

const ExpenseContext = createContext([
    { desc: 'book', amount: 20 },
    { desc: 'fee', amount: 10 },
    { desc: 'fee', amount: 10 },
]);

export default ExpenseContext;


// export const transProvider = ({ }) => {
//     let [state, dispatch] = useReducer(ExpenseReducer, ExpenseContext);
//     function addExpense(transObj: any) {
//         dispatch(
//             {
//                 type: "ADD",
//                 payload: {
//                     desc: transObj.desc,
//                     amount: transObj.amount,
//                 },
//             }
//         )
//     }
// }