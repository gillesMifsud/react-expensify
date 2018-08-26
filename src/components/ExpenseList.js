import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.map((expense) => {

                return <ExpenseListItem
                    {...expense}
                    key={expense.id}
                />
            })
        }
    </div>
);

// Maps the state to the props we want to use in the particular component
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

// export default without arguments exports ExpenseList as the default one
export default connect(mapStateToProps)(ExpenseList);
