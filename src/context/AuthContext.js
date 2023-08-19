import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import { auth, db } from '../firebase'
import { collection, getDocs } from "firebase/firestore";


export const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({})
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [usersList, setUsersList] = useState([]);


    const usersCollectionRef = collection(db, 'users');

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }


    const getUsersList = async () => {
        try {
            const data = await getDocs(usersCollectionRef);

            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setUsersList(filteredData);

        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getUsersList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser)
            setIsAuthenticated(!!currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <UserContext.Provider value={{ createUser, user, logout, signIn, usersList, isAuthenticated }}>
            {children}
        </UserContext.Provider>
    );
}

export const UserAuth = () => {
    return useContext(UserContext);
};