import { useLoaderData } from "react-router-dom";
import User from "./user/User";

const Users =()=>{
    const users = useLoaderData()
    return(
        <div>
            <h1 className="text-5xl text-center mt-4 underline">This Users page{users.length}</h1>
           <div className="grid grid-cols-4 gap-6 p-10 text-center">
           {
                users.map(user =><User user={user}></User>)
            }
           </div>
        </div>
    )
}
export default Users;