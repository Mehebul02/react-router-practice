import { useLoaderData } from "react-router-dom";

const UserDetails =()=>{
const user = useLoaderData()
const {name,email,phone} =user
    return(
        
        <div>
            <h1>{name}</h1>
        </div>
    )
}
export default UserDetails;