import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../config/firebase'
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import {  getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'
import { useSearchParams } from 'react-router-dom'

const CreateList = () => {
    const [searchparams] = useSearchParams();
    // const searchparams.get('id'))
    const docId = searchparams.get('id')
    const postRef = collection(db, 'post')

    let navigate = useNavigate()

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const socials = ['Instagram', 'Twitter', 'Youtube']
    const [socialLinks, setSocialLinks] = useState([])
    const [imageUpload, setImageUpload] = useState(null)
    const [imageUrl, setimageUrl] = useState('')


    const addSocialLink = (e) => {
        const name = e.target.value.toLowerCase()
        const obj = { name, link: "" }
        setSocialLinks(links => [...links, obj])
    }

    const dataChange = (e) => {
        const _socialLinks = socialLinks.map(item => item.name == e.target.name ? { ...item, link: e.target.value } : item)
        setSocialLinks(_socialLinks)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await addDoc(postRef, {
            name, description, category, socialLinks
        })

        navigate('/listing')
    }


    const updatePost = async (e) => {
        e.preventDefault()
        try {
            console.log(docId)
            const postDoc = doc(db, "post", docId)
            await updateDoc(postDoc, { name, category, description, socialLinks })
            navigate('/listing')
        } catch (error) {
            console.log(error)
        }
    }

    const uploadImage = (e) => {
        e.preventDefault()
        if (imageUpload == null) return
        const storage = getStorage();
        const imageRef = ref(storage, `test/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then(() => {
            console.log('Image Uploaded')
            getDownloadURL(imageRef).then((downloadURL) => {
                console.log('File available at', downloadURL);
                setimageUrl(downloadURL)
              });
        })

    }

    useEffect(() => {
        if (docId) {
            console.log('hello')
            // const docId = searchparams.get('id')
            const docRef = doc(db, 'post', docId)
            const getData = async () => {
                const data = await getDoc(docRef)
                const post = data.data()
                console.log(post)
                setName(post.name)
                setCategory(post.category)
                setDescription(post.description)
                setSocialLinks(post.socialLinks)
            }
            getData()
        }
    }, [])

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h2 className="text-center mb-3">Fill the form</h2>
                        {/* {socialLinks.map(item => (
                            <div key={item.name}>
                                <span>{item.name}</span>:
                                <span>{item.link}</span>
                            </div>
                        ))} */}
                        {docId ? docId : 'no id'}
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name:</label>
                                <input type="text" value={name} name="name" className="form-control" onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Description:</label>
                                <textarea className="form-control" row="5" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Category:</label>
                                <select className="form-select" value={category} aria-label="Default select example" onChange={(e) => setCategory(e.target.value)}>
                                    <option value="" disabled>Select Category</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Social Links:</label>
                                <select defaultValue="" className="form-select" aria-label="Default select example" onChange={addSocialLink}>
                                    <option value="" disabled>Select Social Media</option>
                                    {socials.map(social => (<option key={social} value={social}>{social}</option>))}
                                </select>

                                {socialLinks.length != 0
                                    ?
                                    socialLinks.map(soc => (
                                        <input type="text" value={soc.link} className="form-control mt-3" name={soc.name} placeholder={soc.name} key={soc.name} onChange={dataChange} />
                                    ))
                                    : null}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Upload Photo</label>
                                <input type="file" className="form-control" onChange={(e) => setImageUpload(e.target.files[0])}/>
                                <button className='btn btn-info' onClick={uploadImage}>Upload Image</button>
                            </div>
                        
                            {
                                docId
                                    ?
                                    <button type="submit" className="btn btn-primary" onClick={updatePost}>Update</button>
                                    :
                                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>

                            }
                        </form>
                        <div className="mb-3">
                                <label className="form-label">Images Previews</label>
                                <img src={imageUrl} alt="" sx={{width:'200px'}} />
                            </div>


                    </div>
                </div>
            </div>
            
        </>
    );
}

export default CreateList;