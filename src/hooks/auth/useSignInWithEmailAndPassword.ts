import * as React from 'react';
/* eslint-disable import/no-anonymous-default-export */
import {
  Auth,
  UserCredential,
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";

export default (auth:Auth) => {
    const [loggedInUser, setLoggedInUser] = useState<UserCredential>();
    const [loading, setLoading] = useState<boolean>(false);

    React.useCallback(()=>{

    },[]);

      const signInWithEmailAndPassword = async (
        email: string,
        password: string,
        cb:any
      ) => {
        setLoading(true);
        try {
          const user = await firebaseSignInWithEmailAndPassword(
            auth,
            email,
            password
          );
          setLoggedInUser(user);
        } catch (error:any) {
           switch (error.code) {
             case "auth/invalid-email":
               cb("Email is not valid.");
               break;
             case "auth/wrong-password":
               cb("Wrong Password...");
               break;
             default:
               cb("User not Found...");
               break;
           }
        } finally {
          setLoading(false);
        }
      };

    return { loggedInUser, loading, signInWithEmailAndPassword };
}