import { createStore } from 'redux';

const initialState = {
    users :[]
}

const utilisateursReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AJOUTER_UTILISATEUR':
            return {...state, users : [...state.users, action.payload]};
        default:
            return state;
    }
};

const store = createStore(utilisateursReducer);

export default store;