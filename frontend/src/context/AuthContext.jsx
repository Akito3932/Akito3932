import { createContext, useContext,useEffect,useReducer } from "react";

const initialState = {
    user: localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null,
    role: localStorage.getItem('role') || null,
    token: localStorage.getItem('token') || null,
    gender: localStorage.getItem('gender') || null,
};

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                
                user: null,
                role: null,
                token: null,
                gender: null
            };
        case 'LOGIN_SUCCESS':
            return {
                
                user: action.payload.user,
                role: action.payload.role,
                token: action.payload.token,
                gender: action.payload.gender
            };
        case 'LOGOUT':
            return {
                user: null,
                role: null,
                token: null,
                gender: null
            };
       
        default:
            return state;
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {

        localStorage.setItem('user', JSON.stringify(state.user))
        localStorage.setItem('token', state.token)
        localStorage.setItem('role', state.role)
        localStorage.setItem('gender', state.gender)
    //     const token = localStorage.getItem('token');
    //     const user = localStorage.getItem('user');
    //     const role = localStorage.getItem('role');
    //     if (token && user && role) {
    //         dispatch({
    //             type: 'LOGIN_SUCCESS',
    //             payload: {
    //                 token,
    //                 user: JSON.parse(user),
    //                 role,
    //             },
    //         });
    //     }
    }
    , [state]);

    return (
        <authContext.Provider
            value={{
                user: state.user,
                role: state.role,
                token: state.token,
                gender: state.gender,
                dispatch,
            }}
        >
            {children}
        </authContext.Provider>
    );
};

