import React, { Children, createContext, useContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const AuthContext = createContext();

export const Authprovider = ({ children }) => {

    const [user, setUser] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

    const signInWithFacebook = () => signInWithPopup(auth, facebookProvider);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const logOut = () => signOut(auth);

    const authInfo = {
        user,
        createUser,
        signIn,
        signInWithGoogle,
        signInWithFacebook,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);