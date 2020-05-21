import React from 'react';
import { connect } from 'react-redux';
import {setVote} from './../reducers/anecdoteReducer'


const AnecdoteList = (props) => {

    const vote = (object) => {
        props.setVote(object);
    };

    return (
        <div>
            <h1>Anecdotes</h1>
            {
                props.anecdotesToShow.map(anecdote =>                
                    <div key={anecdote.id}>
                        <p>{anecdote.content}</p>
                        <p>
                            {anecdote.votes} votes &nbsp;
                            <button onClick={() => vote(anecdote)}>vote</button>
                        </p>
                        <hr />
                    </div>
                )
            }
        </div>
    );
};



const mapStateToProps = (state) => {    
    return {
        anecdotesToShow: state.anecdotes
    };
}

const mapDispatchToProps = {
    setVote,
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
