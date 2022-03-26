import React, {useState} from 'react';
import {NavLink, Link, useNavigate} from "react-router-dom";
import Logo from './../../images/mation.png'

const Header = () => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()
    const inputSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleSearch = () => {
        if (search.trim()) {
            navigate(`/search-result/${search}`)
        }
    }


    return (
        <header className=" text-gray-100 bg-black  shadow-2xl w-full fixed z-10 ">

            <div
                className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center lg:items-center lg:justify-center mb-4 md: mb-0">

                <Link to="/"> <img src={Logo} alt="logo" className="w-10"/></Link>
                <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                    <NavLink to="/"
                             className="mr-5 cursor-pointer border-b border-transparent hover:border-indigo-600">Home</NavLink>
                    <NavLink to="/popular"
                             className="mr-5 cursor-pointer border-b border-transparent hover:border-indigo-600">Popular</NavLink>
                    <NavLink to="/toprated"
                             className="mr-5 cursor-pointer border-b border-transparent hover:border-indigo-600">TopRated</NavLink>
                    <NavLink to="/upcoming"
                             className="mr-5 cursor-pointer border-b border-transparent hover:border-indigo-600">UpComing</NavLink>
                    <NavLink to="/latest"
                             className="mr-5 cursor-pointer border-b border-transparent hover:border-indigo-600">Latest</NavLink>
                </nav>
                <div className="lg: w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">

                    <input type="search" name="search" className="text-black p-2" onSubmit={inputSearch}/>
                    <button onClick={handleSearch}
                            className="btn bg-indigo-700 hover:bg-indigo-500 text-black ml-4 py-2 px-3 rounded-lg text-white ">
                        Search
                    </button>

                </div>

            </div>

        </header>
    );
};

export default Header;