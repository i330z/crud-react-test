import { useState } from "react";
import { sendPasswordReset } from "../../config/auth";

const PasswordReset = () => {
    const [email, setEmail] = useState('')

    const resetPassword = async () => {
        await sendPasswordReset(email)
    }

    return ( 

        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <input type="text" placeholder="Enter your Email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                    <button className="btn btn-primary mt-3" onClick={resetPassword}>Reset Password</button>
                </div>

            </div>
        </div>

     );
}
 
export default PasswordReset;