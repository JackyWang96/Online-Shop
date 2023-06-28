import { createContext, useState, useEffect,useReducer } from 'react';

import {
    onAuthStateChangedListener,
    createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER"
}


const INITIAL_STATE= {
    currentUser: null
}
const userReducer = (state, action)=>{
    console.log('action is',action);


    const {type, payload}=action;
    console.log('payload is',payload);
    switch (type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: payload,
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}

export const UserProvider = ({ children }) => {
    // const [currentUser, setCurrentUser] = useState(null);
    //dispath()会传输给action，然后进入switch
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
    const {currentUser} = state;
    console.log('currentUser',currentUser);
    const setCurrentUser = (user)=> {
        //如果 setCurrentUser 被调用了两次，那可能是因为在组件的生命周期中，认证状态发生了两次变化。这可能是因为用户首先是未认证状态（例如，页面加载时），
        // 然后认证状态发生了变化（例如，用户登录了）。这将会导致 setCurrentUser 被调用两次：一次是初始的未认证状态，一次是用户登录后的认证状态。
        dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload:user});
    };
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};