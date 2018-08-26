import React from 'react';
import { connect } from 'react-redux';
import {setTextFilter} from "../actions/filters";

const ExpenseListFilters = (props) => (
    <div>
        <input type="text" placeholder="Filter"
               value={props.filters.text}
               onChange={(e) => props.dispatch(setTextFilter(e.target.value))}
        />
    </div>
);

// Maps the state to the props we want to use in the particular component
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilters);