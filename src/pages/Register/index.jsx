import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { register } from "../../config/auth";
import { addDoc, collection } from "firebase/firestore";



const Register = () => {
    // signOut(auth)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')

    const userRef = collection(db, "users")



    const registerUser = async (e) => {
        e.preventDefault()
        const user = await register(email, password)
        console.log(user)
        try {
            await addDoc(userRef, {
                uid: user.uid,
                // name: displayName,
                email
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
    },[])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h1 className="my-5">Register User</h1>
                        <form>
                            <input type="email" placeholder="Email" value={email} name="email" className="form-control mb-4" onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="Password" value={password} name="password" className="form-control mb-4" onChange={(e) => setPassword(e.target.value)} />
                            <button className="btn btn-primary" onClick={registerUser}>Register</button>
                        </form>

                        Logged-in :  {user?.email}


                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;