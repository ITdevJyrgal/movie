import React, {useState, useEffect} from 'react';
import axios from "axios";
import {ApiKey} from "../ApiKey/ApiKey";
import MovieCard from "../Card/MovieCard";


const Latest = () => {
    const [latest, setLatest] = useState([])


    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US`)
            .then(({data}) => setLatest(data.results))
    }, [])
    console.log(latest)


    return (

        <div className=" pt-10">
            <div className="container mx-auto flex flex-wrap p-10 flex-col md:flex-row items-center mx-auto">
                <h1 className="text-3xl w-full py-5 text-gray-100">Latest movies</h1>

                <div className="flex flex-row flex-wrap">
                    {
                        latest.map(el => (

                                <MovieCard el={el} key={el.id}/>

                            )
                        )

                    }

                </div>

            </div>
        </div>

    );
};

export default Latest;