import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav className=" z-50 navbar flex fixed bg-prime-dark shadow justify-between w-full px-7 py-3 text-white text-xl " >
                <div className="logo festive-regular text-2xl">Ghumukkar Travels</div>
                <ul className="menu flex justify-center items-center gap-7">
                    <Link to='/tours'><li>Tours</li></Link>
                    <Link to='/'><li>Blogs</li></Link>
                    <Link to="hotels"><li>Hotels</li></Link>
                    <Link to='favorites' ><li>Favorites</li></Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar