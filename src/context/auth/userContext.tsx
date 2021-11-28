import * as React from 'react';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import {useAuthState} from '../../hooks/auth';

const {useState} = React;
const userContext = React.createContext({user:null,loading:false} as any);


export const useUserContext = () => React.useContext(userContext);


const UserContextProvider = ({children}:any) => {

    const navigate = useNavigate();

    

    const {user , loading} = useAuthState(auth);



    const contextValue = {user, loading};
    return (
      <userContext.Provider value={contextValue}>
        {children}
      </userContext.Provider>
    );

}

export default UserContextProvider;