import React from 'react';
import {setAnecdote} from './../reducers/anecdoteReducer'
import { connect } from 'react-redux';


const NewAnecdote = (props) => {

    const handleSubmit = async event => {
        event.preventDefault();
        const content = event.target.anecdote.value;
        event.target.anecdote.value = '';
        props.setAnecdote(content);

    };
    
    return (
        <div> 
            <h2>Create New Anecdote</h2>
            <form onSubmit = {event => handleSubmit(event)}>
                <input type="text" name="anecdote" />
                <br />
                
                <button type='submit'>Add</button>
               
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    setAnecdote,
}

export default connect(null, mapDispatchToProps)(NewAnecdote)