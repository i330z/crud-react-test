import { Link } from "react-router-dom";


const Home = () => {

    

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h1>Create Post</h1>
                        <Link to="/create-list">
                            <button className="btn btn-primary">Create List</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;