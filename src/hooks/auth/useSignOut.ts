/* eslint-disable import/no-anonymous-default-export */
import { Auth, signOut as firebaseSignOut} from "firebase/auth"


export default (auth:Auth,successCB:any, errorCB:any) => {

    const signOut = async () => {
        try {
            firebaseSignOut(auth);
            successCB("Logout successfully");
        } catch (error:any) {
            errorCB(error.message);
        }
    }
   return { signOut };
}