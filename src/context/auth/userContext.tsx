import * as React from 'react';
import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut,
    sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';


const {useState} = React;
const userContext = React.createContext({} as any);


export const useUserContext = () => React.useContext(userContext);


const UserContextProvider = ({children}:any) => {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState("");


    React.useEffect(()=>{
        setLoading(true);
        const unsubcribe = onAuthStateChanged(auth, (userData)=>{
            if(userData){
              setUser(userData as any)
              setError("");
              setLoading(false);
            } else{
              setUser(null);
              setLoading(false);
            }
        });

        return unsubcribe;
    } , [navigate]);

    const registerUser = (email:any,password:any) => {
        setLoading(true);

        createUserWithEmailAndPassword(auth,email,password)
            .then((_)=>{
                navigate('/dashboard')
            })
            .catch(({message})=>{
                setError(message as any)
            })
            .finally(()=> setLoading(false))
    }    


    const loginUser = (email:any,password:any)=> {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
          .then((_) => {
            navigate("/dashboard");
          })
          .catch(({ message }) => {
            setError(message as any);
          })
          .finally(() => setLoading(false));
    }


    const logOutUser = () => {
        setLoading(true);
        signOut(auth)
          .then((_) => {
            navigate("/");
          })
          .catch(({ message }) => {
            setError(message as any);
          })
          .finally(() => setLoading(false));
    }

    const forgotPassword = (email:any) => {
        return sendPasswordResetEmail(auth, email)
    }

    const contextValue = {user, error, loading, registerUser, loginUser, logOutUser ,forgotPassword};
    return (
      <userContext.Provider value={contextValue}>
        {children}
      </userContext.Provider>
    );

}

export default UserContextProvider;