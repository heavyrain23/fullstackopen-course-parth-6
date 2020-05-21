import React from 'react';
import { connect } from 'react-redux';
import {setVote, deleteAnecdote} from './../reducers/anecdoteReducer'


const AnecdoteList = (props) => {

    const vote = (object) => {
        props.setVote(object);
    };
    
    const deleteButtonHandler = (id) => {
       props.deleteAnecdote(id);
       
    }
    
    return (
        <div>
            <h1>Anecdotes</h1>
            {
                props.anecdotesToShow.map(anecdote =>                
                    <div key={anecdote.id}>
                        <p>{anecdote.content}</p>
                        <p>
                            {anecdote.votes} votes &nbsp;
                            <button onClick ={() => vote(anecdote)}>vote</button> &nbsp;
                            <button onClick ={() => deleteButtonHandler(anecdote.id)}>delete</button>
                            
                        </p>
                        <hr />
                    </div>
                )
            }
        </div>
    );
};

const anecdotesToShow = ({anecdotes,filter}) => 
    anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase())
);



const mapStateToProps = (state) => {    
    return {
        anecdotesToShow: anecdotesToShow(state)
    };
}

const mapDispatchToProps = {
    setVote,
    deleteAnecdote,
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
