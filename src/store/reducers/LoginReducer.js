import { LOGIN_ACTION_KEY } from '../constant';

const initial_state = {
    userDetails: {}
}

const LoginReducer = ( action , state = initial_state) => {
    switch (action.type) {
        case LOGIN_ACTION_KEY:
            return { ...state, userDetails: { ...action.payload } };
        default:
            return state;
    }
}


export default LoginReducer;