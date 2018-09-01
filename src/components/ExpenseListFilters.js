import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from "../actions/filters";

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => {
            calendarFocused
        });
    };

    render() {
        return (
            <div>
                <input type="text" placeholder="Filter"
                       value={this.props.filters.text}
                       onChange={(e) => this.props.dispatch(setTextFilter(e.target.value))}
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === "date") {
                            this.props.dispatch(sortByDate());
                        } else if (e.target.value === "amount") {
                            this.props.dispatch(sortByAmount());
                        }
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}

// Maps the state to the props we want to use in the particular component
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilters);