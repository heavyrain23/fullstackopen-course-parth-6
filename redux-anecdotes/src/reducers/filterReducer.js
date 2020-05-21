
const filterReducer = (state = '', action) => {
    switch (action.type) {
        case 'FILTER':
            return action.data;   
        default:
            return state;
    }
};

export const setFilter = (text) => {
    return {
        type: 'FILTER',
        data: text
    }
}

export default filterReducer;