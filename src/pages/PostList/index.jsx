import { useEffect, useState } from "react";
import { db } from '../../config/firebase'
import { collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { createSearchParams, useNavigate } from 'react-router-dom'


const PostList = () => {

    const navigate = useNavigate()
    const [posts, setPosts] = useState([])
    const postRef = collection(db, 'post')


    const updatePost = (id) => {
        navigate({
            pathname:"/create-list",
            search: createSearchParams({
                id: id
            }).toString()
        })

        // const postDoc = doc(db, "post", id)
        // await updateDoc(postDoc, {name: 'Updated Title'})
    }

    const deletePost = async (id) => {
        const postDoc = doc(db,"post", id)
        await deleteDoc(postDoc)
    }


    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postRef)
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getPosts()
    }, [])


    return (
        <>
            <div className="container">
                <div className="row">
                <h2>Post list</h2>

                    {
                        posts.map((post) =>
                        (
                            <div className="col-md-6 col-lg-4" key={post.name}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{ post.name }</h5>
                                        <p>{ post.description }</p>
                                        <button className=" btn btn-warning m-2" onClick={() => {deletePost(post.id)}}>Delete</button>
                                        <button className="btn btn-info" onClick={() => {updatePost(post.id)}}>Update</button>
                                    </div>
                                </div>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
            

        </>
    );
}

export default PostList;