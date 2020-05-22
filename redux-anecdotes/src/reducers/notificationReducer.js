
const initialState = { message: ""}

const notificationReducer = (state =initialState, action ) => {
    switch (action.type) {
        case "NEW": 
            return {...state, message: action.data};
        case "VOTE": 
             return {...state, message: action.data}
        case "REMOVE": 
             return {...state, message: action.data}
        default: 
             return state;
    }
}

export const newNotification = (anecdote) => {
    return async dispatch => {
        dispatch({
            type: "NEW",
            data: `You created: "${anecdote}"`
        });
        setTimeout(() =>
            dispatch({
                type: "REMOVE",
                data: ''
            }), 5000);
    };
};

export const voteNotification = (anecdote) => {
    return async dispatch => {
        dispatch({
            type: "VOTE",
            data: `You voted for: "${anecdote}"`
        });
        setTimeout(() =>
            dispatch({
                type: "REMOVE",
                data: ''
            }), 5000);
    };
};


export default notificationReducer;