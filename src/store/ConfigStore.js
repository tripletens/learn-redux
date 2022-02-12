import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import LoginReducer from './reducers/LoginReducer';

const ConfigureStore = () => {
    const rootReducer = combineReducers({
        login: LoginReducer,
    });
    
    return createStore(rootReducer, applyMiddleware(thunk));
}

export default ConfigureStore;