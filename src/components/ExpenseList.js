import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.length}
        {props.filters.text}
    </div>
);

// Maps the state to the props we want to use in the particular component
const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    }
};

// export default without arguments exports ExpenseList as the default one
export default connect(mapStateToProps)(ExpenseList);
