import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CreateList = () => {
    let navigate = useNavigate()

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const socials = ['Instagram', 'Twitter', 'Youtube']
    const [socialLinks, setSocialLinks] = useState([])

    const addSocialLink = (e) => {
        const name = e.target.value.toLowerCase()
        const obj ={ name, link:"google.com" }
        setSocialLinks(links => [...links, obj])
    }

    const dataChange = (e) =>{
        console.log(e.target.name)
        console.log(e.target.value)

        const socialItemIndex = socialLinks.findIndex(item => item.name == e.target.name.toLowerCase())
        // socialLinks[socialItemIndex] = { ...socialLinks[socialItemIndex], link: e.target.value }
        const _socialLinks = socialLinks.filter(item => item.name != e.target.name)
        console.log(_socialLinks)
        setSocialLinks(_socialLinks)

        // console.log(socialItemIndex)
    }

    const handleSubmit = () => {
        navigate('/listing')
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h2 className="text-center mb-3">Fill the form</h2>
                        { socialLinks.map(item => (
                            <div key={item.name}>
                                <span>{ item.name }</span>:
                                <span>{ item.link }</span>
                            </div>
                        )) }
                        
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name:</label>
                                <input type="text" name="name" className="form-control" onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Description:</label>
                                <textarea className="form-control" row="5" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Category:</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option>Select Category</option>
                                    <option defaultValue="1">One</option>
                                    <option defaultValue="2">Two</option>
                                    <option defaultValue="3">Three</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Social Links:</label>
                                <select className="form-select" aria-label="Default select example" onChange={addSocialLink}>
                                    <option selected disabled>Select Social Media</option>
                                    {
                                        socials.map(social => (
                                            <option key={social} defaultValue={social}>{social}</option>
                                        ))
                                    }
                                </select>
                                { socialLinks.length != 0 
                                ?
                                socialLinks.map(soc => (
                                    <input type="text" className="form-control mt-3" name={soc.name} placeholder={soc.name} key={soc.name} onChange={dataChange} /> 
                                ))
                                : null }
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Upload Photo</label>
                                <input type="file" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Images Previews</label>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateList;