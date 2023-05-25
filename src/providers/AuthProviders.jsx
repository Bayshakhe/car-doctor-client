import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../src/firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();

const AuthProviders = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setLoading(false);
      setUser(currentuser);
      // console.log("current user", currentuser);
      // const loggedUser = {
      //   email: currentuser?.email
      // }
      if(currentuser && currentuser?.email){
        const loggedUser = {
        email: currentuser?.email
      }
        fetch('https://car-doctor-server-indol.vercel.app/jwt',{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(loggedUser)
      })
      .then(res => res.json())
      .then(data => {
        // console.log('jwt response', data)
        localStorage.setItem('car-doctor-access-token', data.token)
      })
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [auth]);

  const authInfo = {
    user,
    createUser,
    signinUser,
    googleLogin,
    loading,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
