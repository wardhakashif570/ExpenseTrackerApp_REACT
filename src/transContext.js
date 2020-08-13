import React, { createContext,useReducer } from "react";
import TransactionReducer from  './transReducer';

const initialTransactions=[
    { amount: 500, desc: "Cash", id:1 },
    { amount: -40, desc: "Book" , id:2 },
    { amount: -200, desc: "Camera" , id:3 },
    { amount: 200, desc: "Utility Bill" , id:4},
]

export  const TransactionContext = createContext(initialTransactions);



export const TransactionProvider=({children})=>{
    let [state,dispatch] = useReducer(TransactionReducer, initialTransactions);
        
    function addTransaction(transObj){
       dispatch({
           type: "ADD_TRANSACTION",
           payload:{
               amount:transObj.amount,
               desc:transObj.desc,
               id: transObj.id
           },
       })   
       
    }
    function deleteTransaction(transObj){
        dispatch({
            type:"DELETE_TRANSACTION",
            payload: {
                id: transObj.id
            },
        })
    }
    return(
        <TransactionContext.Provider value={{
            transactions:state,
            addTransaction,
            deleteTransaction
        }}>
            {children}
</TransactionContext.Provider>
    )

}