import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ApiKey} from "../ApiKey/ApiKey";
import {Link, useParams} from "react-router-dom";
import Slider from "react-slick";
import Trailer from "../Card/Trailer";

const MovieDetails = () => {
    const {id} = useParams()
    const [details, setDetails] = useState([])
    const [log, setLog] = useState([])

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=en-US`)
            .then(({data}) => setDetails(data))
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${ApiKey}&language=en-US`)
            .then(({data}) => setLog(data.cast))

    }, [])
    console.log(details)
    console.log(log)

    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        initialSlide: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div>
            <div className="flex"
                 style={{
                     background: `url("https://image.tmdb.org/t/p/original${details.backdrop_path}")no-repeat center/cover`,
                     padding: "50px"
                 }}>

                <div className="flex md:flex-row rounded-lg bg-gray-600 bg-opacity-90 shadow-lg pr-96 pl-28 py-10 p-2">
                    <img
                        className=" w-full h-96 md:h-auto md:w-72 rounded-t-lg md:rounded-none md:rounded-l-lg "
                        src={`https://image.tmdb.org/t/p/w300/${details.poster_path}`} alt=""/>


                    <div className="p-6 flex flex-col justify-start">
                        <h1 className="text-white text-4xl text-left font-medium mb-2">{details.original_title}</h1>


                        <h5 className="text-white text-xl text-left font-medium mb-2">Overview</h5>
                        <p className="text-white text-base text-left mb-4 w-96">
                            {details.overview}
                        </p>
                        <p className="text-gray-600 text-xs">Last updated 3 min ago</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="container mx-auto ">
                    <h1 className="text-black font-medium text-4xl text-left pt-5 pb-3 pl-4 text-amber-50 text-white">Starring</h1>
                    <Slider {...settings}>
                        {
                            log.map(el => (
                                <div className="border-gray-900 pb-20">
                                    <div
                                        className="mx-3.5 border-2 p-2 border-black rounded-md pt-0.5 shadow-gray shadow-lg shadow-gray-600">
                                        <Link to={`/details/${el.id}`} className="text-white">
                                            <img src={`https://image.tmdb.org/t/p/w400/${el.profile_path}`}
                                                 className='rounded-t-md' alt=""/>
                                        </Link>
                                        <h1 className="text-xl text-black font-bold text-white text-left px-1.5 pb-2">{el.name}</h1>
                                        <p className="text-black text-left px-1.5 text-gray-300">{el.popularity}</p>
                                        <h1 className="text-black text-left px-1.5 pb-4 h-16 text-white">{el.character}</h1>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>


                </div>
            </div>

            <Trailer id={id}/>


        </div>
    );
};

export default MovieDetails;