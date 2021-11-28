/* eslint-disable import/no-anonymous-default-export */
import { Auth, onAuthStateChanged } from 'firebase/auth';
import * as React from 'react'

export default (auth: Auth) => {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

     React.useEffect(() => {
       setLoading(true);
       const unsubscribe = onAuthStateChanged(auth, (userData) => {
         if (userData) {
           setUser(userData as any);
           setLoading(false);
         } else {
           setUser(null);
           setLoading(false);
         }
       });

       return unsubscribe;
     }, []);
     
    return { user, loading }
}