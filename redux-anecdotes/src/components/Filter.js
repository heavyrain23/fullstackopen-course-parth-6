import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from './../reducers/filterReducer';

const AnecdotesFilter = (props) => {

    const filterAnecdotes = (value) => {
        props.setFilter(value)
    }


    return (
        <div>
            <h2>Filter anecdotes</h2>
            <label htmlFor="filter">Filter:</label>
            <input type="text" name="filter" onChange={({target}) => filterAnecdotes(target.value)} />
        </div>
    )
}


export default connect(null, {setFilter} )(AnecdotesFilter)