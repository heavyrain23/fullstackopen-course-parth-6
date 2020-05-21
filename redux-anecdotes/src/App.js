import React , { useEffect } from 'react';
import { connect } from 'react-redux';
import { initialiseAnecdotes } from './reducers/anecdoteReducer';
import AnecdoteList from './components/AnecdoteList';
import NewAnecdote from './components/NewAnecdote';


const App = (props) => {

    useEffect(() => {
        props.initialiseAnecdotes()
    }, [props]);

    return (
        <>
            <h1>Programming Anecdotes</h1>
            <AnecdoteList />
            <NewAnecdote/>
        </>
       
    );
};

const mapDispatchToProps = {
    initialiseAnecdotes
}

export default connect(null, mapDispatchToProps)(App);