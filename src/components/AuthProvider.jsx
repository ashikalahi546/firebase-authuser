import { createContext, useEffect, useState } from "react";
import {
//   FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebase.confiq";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  // const facebookProvider = new FacebookAuthProvider();
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // const facebookLogin = () => {
  //     return signInWithPopup(auth,facebookProvider)
  // }

  const logOut = () =>{
return logOut(auth)
  }
  const authInfo = {
    registerUser,
    loginUser,
    user,
    setUser,
    googleLogin,
    logOut
    // facebookLogin
  };

  useEffect(()=>{
   const unsubcribe =  onAuthStateChanged(auth,(currentUser)=>{
        if (currentUser) {
          console.log(currentUser)

          } else {
           console.log('logged out')
          }
    })
  },[])

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
