import React from 'react';
//função que retorna um novo component
import { connect } from 'react-redux';


const Counter = ({ counter, decrement, increment }) => (
    <div>
        <h1>{counter}</h1>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
    </div>
)

const mapStateToProps = (state) => {
    return {
        counter: state
    }
};

const mapDispatchToProps = (dispatch) => ({
    increment: () => {
        dispatch({ type: 'INCREMENT' })
    },

    decrement: () => {
        dispatch({ type: 'DECREMENT' })            
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)