import React, {useState, useEffect} from 'react';
import axios from "axios";
import {ApiKey} from "../ApiKey/ApiKey";
import MovieCard from "../Card/MovieCard";

const UpComing = () => {

    const [upComing, setUpComing] = useState([])


    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=${ApiKey}&language=en-US&page=1`)
            .then(({data}) => setUpComing(data.results))
    },[])
    console.log(upComing)

    return (

        <div>
            <div className="container mx-auto flex flex-wrap p-20 flex-col md:flex-row items-center mx-auto">
                <h1 className="text-3xl w-full py-5 text-gray-100">UpComing movies</h1>

                <div className="flex flex-row flex-wrap">
                    {
                        upComing.map(el => (
                                <MovieCard el={el} key={el.id}/>
                            )
                        )
                    }
                </div>

            </div>
        </div>

    );

};

export default UpComing;