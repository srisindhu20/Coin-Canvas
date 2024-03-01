import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';
const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":15000,"category":"Salary","type":"Income","date":"2023-10-12","id":"c98c364d-dde0-4367-87c2-86c4"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);
    const deleteTransaction = (id) => { dispatch({ type: 'DELETE_TRANSACTION', payload: id});}
    const addTransaction = (transaction) => { dispatch({ type: 'ADD_TRANSACTION', payload: transaction});}
    const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);


    return (
        <ExpenseTrackerContext.Provider value={{ 
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    );
}