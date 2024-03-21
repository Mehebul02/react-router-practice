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
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/users'>Users</Link>
                    <Link to='/blog'>Blog</Link>
                </ul>
            </nav>

        </div>
    )
}
export default Header