import { Link } from "react-router-dom";
import { logOutUser } from "../../config/auth";

const Home = () => {

    const logOut = async() =>{
      await logOutUser()
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h1>Create Post</h1>
                        <Link to="/create-list">
                            <button className="btn btn-primary">Create List</button>
                        </Link>

                        <button className="m-2 btn btn-danger" onClick={logOut}>SignOut</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;