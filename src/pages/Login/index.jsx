import { useState } from "react";
import { Link } from "react-router-dom";
import { logInUser } from "../../config/auth";
import { auth } from "../../config/firebase";

const LogInUser = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const signIn = async (e) => {
        e.preventDefault()

        const user = await logInUser(email, password)
        console.log(user)

    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form>
                        <input type="email" placeholder="Email" value={email} name="email" className="form-control mb-4" onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" value={password} name="password" className="form-control mb-4" onChange={(e) => setPassword(e.target.value)} />
                        <button className="btn btn-primary" onClick={signIn}>Log In</button>
                    </form>
                    <Link to="/reset-password">Forgot Password</Link>
                </div>
            </div>

        </div>
    );
}

export default LogInUser;