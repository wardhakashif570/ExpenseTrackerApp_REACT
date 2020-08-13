const TransactionReducer = ((state, action) => {

    switch(action.type){

        case "ADD_TRANSACTION": { return [action.payload, ...state]; } 
        
        case "DELETE_TRANSACTION": { return state.filter((item) => item.id !== action.payload.id); }

    default:

        return state;
        
        }    
})
export default TransactionReducer;