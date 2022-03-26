import React from 'react';
import {Link} from "react-router-dom";




const Homecarda = ({el}) => {
    return (

        <div className="basis-1/4 my-5 pt-10 text-center flex justify-center" key={el.id}>
            <div
                className="text-gray-100  bg-gray-900 px-4 py-4 rounded-md body-font shadow-black bg-black-500 shadow-lg shadow-black-500/100 hover:scale-105">

                <Link to={`/${el.id}`}>
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt=""
                         className="object-cover rounded-md" style={{
                             width:"700px",
                        height:"400px",
                        objectFit:"contain",
                        transition:".4s"
                    }}/>
                </Link>

                <span className="flex flex-col mt-3">
                        <h4 className="font-head font-medium pb-5 w-60 text-left">{el.title}</h4>

                    <div className="flex justify-between">
                        <p>{el.release_date}</p>
                        <div className="bg-gray-500 px-1.5 py-1.5 w-12  rounded-3xl">
                            <p className=" px-1.5 bg-gray-900 py-1 rounded-3xl">{el.vote_average}</p>
                        </div>
                    </div>

                    </span>
            </div>

        </div>

    );
};

export default Homecarda;