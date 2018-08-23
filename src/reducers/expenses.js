// Expenses Reducer

const expensesReducerDefaultState = [];

// [...state, action.expense] = spread operator (es6)
// It creates new array with existing values (...state) and adding after the new one (action.expense)

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    // Return a new object, changing its expense
                    // Grabs all existing properties
                    // Overrides the properties passed down
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense
                }
            });
        default:
            return state;
    }
};