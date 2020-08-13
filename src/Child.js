import React, { useContext, useState } from 'react';
import './App.css';
import { TransactionContext } from './transContext';


function Child() {
    let { transactions, addTransaction , deleteTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState("");
    const handleAddition = (event) => {
        event.preventDefault();
        if(Number(newAmount) === 0){
            alert("Please enter correct value");
            return false;
        }
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        });
        setDesc('');
        setAmount('0')

    }
    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income += transactions[i].amount
        }
        return income;
    }
    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }
    

    return (
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>
           <h3>YOUR BALANCE<br />${getIncome()+getExpense()}</h3>

            <div className="expense-container">
                <h3>INCOME<br />${getIncome()}</h3>
              <h3>EXPENSE<br />${getExpense()}</h3>
            </div>
            <h3>HISTORY</h3>
            <hr />
            <ul className="transaction-list">
                {transactions.map((transobj, ind) => {
                    return (<li key={ind} >
                        <span>{transobj.desc}</span>
                        <span>${transobj.amount}<button onClick={()=>deleteTransaction({id:transobj.id})}>X</button></span>
                    </li>)

                })}
            </ul>
            <h3>Add new transaction</h3>
            <hr />
            <form className="transaction-form" onSubmit={handleAddition}>
                <label>
                    Enter Description<hr />
                    <input type="text" 
                    value={newDesc}required onChange={(ev) => setDesc(ev.target.value)} />
                </label>
                <br />
                <label>
                    Enter Amount<hr />
                    <input type="number" value={newAmount} required onChange={(ev) => setAmount(ev.target.value)} />
                </label>
                <br />
                <input type="submit" value="Add Transaction" />
            </form>
        </div>
    );
}

export default Child;
