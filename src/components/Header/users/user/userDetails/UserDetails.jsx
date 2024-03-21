import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails =()=>{
const user = useLoaderData()
const {id,name,email,phone,website} =user
const userStyle={
    border:'2px solid red',
    padding:'10px',
    borderRadius:'10px',
    width:'200px',
    textAlign:'center'
}
const navigate =useNavigate()
const handleGoBack =()=>{
    navigate(-1)
}
    return(
        
        <div className="">
           <div className="text-center border-2 border-red-500 max-w-2xl mx-auto mt-10">
            <h1>Post Id:{id}</h1>
           <h1 className="text-2xl">Name:{name}</h1>
           <p>Email:{email}</p>
           <p>Phone:{phone}</p>
           <p>Website:{website}</p>
           <button onClick={handleGoBack} className="btn bg-cyan-600 text-xl text-white ">Go Back</button>
           </div>
        </div>
    )
}
export default UserDetails;