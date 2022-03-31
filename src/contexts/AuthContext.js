import React, { useState, useEffect, useContext } from "react";
import { auth } from "../firebase-config";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider( { children }) {
    const [currentUser, setCurrentUser] = useState();
    // const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        })

        return unsubcribe;
    }, []);

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        auth.signOut()
    }

    // function resetPassword(email) {
    //     return auth.sendPasswordResetEmail(email)
    // }

    const value = {
        currentUser,
        signup,
        login,
        logout,
        // resetPassword,
    }

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}