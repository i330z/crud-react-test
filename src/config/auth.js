import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";

export const register = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return errorMessage
    }
}


export const logOutUser = async () => {
    try {
        await signOut(auth)
    } catch (error) {
        console.log(error)
    }
}

export const logInUser = async (email, password) => {
    try {
       const user =  await signInWithEmailAndPassword(auth, email, password)
       return user
    } catch (error) {
        return error.message
    }
}

export const sendPasswordReset = async (email) =>{
    try {
        await sendPasswordResetEmail(auth, email)
        alert('reset link sent to your email')
    } catch (error) {
        console.log(error)
    }
}