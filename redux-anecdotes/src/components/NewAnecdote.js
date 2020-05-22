import React from 'react';
import {setAnecdote} from './../reducers/anecdoteReducer'
import { connect } from 'react-redux';
import {newNotification} from './../reducers/notificationReducer'


const NewAnecdote = (props) => {

    const handleSubmit = async event => {
        event.preventDefault();
        const content = event.target.anecdote.value;
        event.target.anecdote.value = '';
        props.setAnecdote(content);
        props.newNotification(content)

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
    newNotification
}



export default connect(null, mapDispatchToProps)(NewAnecdote)