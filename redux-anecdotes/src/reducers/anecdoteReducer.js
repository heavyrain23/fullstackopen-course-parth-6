import anecdoteService from '../services/anecdoteService';

const reducer = (state = [], action) => {
    switch (action.type) {

        case 'INIT_ANECDOTES':
            return action.data;

        case 'INCREASE_VOTE':
             return state.map(anecdote => 
                 anecdote.id !== action.data.id 
                 ? anecdote : {...anecdote, votes: anecdote.votes + 1});
             
        default:
            return state;

    }

    
};



export const setVote = (object) => {
    return async dispatch => {
        const data = await anecdoteService.getVote(object);
        dispatch({
            type: 'INCREASE_VOTE',
            data: data
        });
    };
};


export const initialiseAnecdotes = () => {
    return async dispatch => {
        const data = await anecdoteService.getAll();
        dispatch({
            type: 'INIT_ANECDOTES',
            data: data
        });
    };
};

export default reducer;