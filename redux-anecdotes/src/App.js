import React , { useEffect } from 'react';
import { connect } from 'react-redux';
import { initialiseAnecdotes } from './reducers/anecdoteReducer';
import AnecdoteList from './components/AnecdoteList';
import NewAnecdote from './components/NewAnecdote';
import Filter from './components/Filter'
import Notification from './components/Notification'


const App = (props) => {

    useEffect(() => {
        props.initialiseAnecdotes()
    }, [props]);

    return (
        <>
            <h1>Programming Anecdotes</h1>
            <Notification/>
            <AnecdoteList />
            <NewAnecdote/>
            <Filter/>
            
        </>
       
    );
};

const mapDispatchToProps = {
    initialiseAnecdotes
}

export default connect(null, mapDispatchToProps)(App);