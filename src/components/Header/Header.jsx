import { Link, NavLink } from "react-router-dom";
const Header=()=>{
    return(
        <div>
            
             <nav>
                
                <ul className=" flex justify-end space-x-6  text-3xl shadow-xl p-3">
                    {/* <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/blog">Blog</a></li> */}
                    <NavLink to='/' className={({isActive})=>isActive?'underline text-red-700':'red'}>Home</NavLink>
                    <NavLink to='/about'className={({isActive})=>isActive?'underline text-red-700':'red'} >About</NavLink>
                    <NavLink to='/users' className={({isActive})=>isActive?'underline text-red-700':'red'}>Users</NavLink>
                    <NavLink to='/blog' className={({isActive})=>isActive?'underline text-red-700':'red'}>Blog</NavLink>
                </ul>
            </nav>

        </div>
    )
}
export default Header