import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
    
    const action = removeExpense({id: '123abc'});
    
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });

});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {
        description: 'rent',
        amount: '12345'
    });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'rent',
            amount: '12345'
        }
    });
});

test('should setup add expense action object with PROVIDED values', () => {
    const expenseDatas = {
        description: 'Rent',
        note: 'Some test note',
        amount: 120000,
        createdAt: 1000
    };

    const action = addExpense(expenseDatas);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseDatas,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with DEFAULT values', () => {

    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description : '',
            note : '',
            amount : 0,
            createdAt : 0,
            id: expect.any(String)
        }
    });
});