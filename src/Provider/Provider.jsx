import { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    getAuth, onAuthStateChanged,
    signInWithPopup, signOut,
} from "firebase/auth";
import app from "../firebase/firebase";

export const AuthContext = createContext(null)

export default function Provider({ children }) {

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);



    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        signOut(auth)
            .then()
            .catch();
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unSubscribe()
        }

    }, [auth]);

    const data = {
        googleLogin,
        user,
        logOut,
    }
    return (
        <div>
            <AuthContext.Provider value={data}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};
