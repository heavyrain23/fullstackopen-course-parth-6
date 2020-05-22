import anecdoteService from '../services/anecdoteService';

const reducer = (state = [], action) => {
    switch (action.type) {

        case 'INIT_ANECDOTES':
            return action.data;

        case 'INCREASE_VOTE':
             return state.map(anecdote => 
                 anecdote.id !== action.data.id 
                 ? anecdote : {...anecdote, votes: anecdote.votes + 1});

        case 'ADD_ANECDOTE':
            return [...state, action.data];
        
        case 'DELETE_ANECDOTE':
             return {
                ...state, 
                anecdotes: state.anecdotes.filter(anecdote => anecdote.id !== action.data.id)
            }
                                     
        default:
            return state;   
    }
    
};
debugger;
export const setAnecdote = (content) => {
    return async dispatch => {
        const data = await anecdoteService.createAnecdote(content);
        dispatch({
            type: 'ADD_ANECDOTE',
            data: data
        });
    };
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


export const deleteAnecdote = (id) => {
    return async dispatch => {
        const data = await anecdoteService.deleteAnecdote(id);
        dispatch({
            type: 'DELETE_ANECDOTE',
            data: data
        })
    }
}


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