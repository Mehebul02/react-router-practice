import { Link } from "react-router-dom";

const User =({user})=>{
    const {id,name,email,phone} = user
    const userStyle={
        border:'2px solid red',
        padding:'10px',
        borderRadius:'10px'
    }
    return(
        <div style={userStyle} className="space-y-6 shadow-md">
            <h1 className="text-2xl">{name}</h1>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
           <Link to={`/user/${id}`}> <button className="btn bg-cyan-700 text-white font-bold hover:bg-amber-600">User Details</button></Link>

        </div>
    )
};
export default User;