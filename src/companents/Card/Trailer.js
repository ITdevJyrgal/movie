import React, {useEffect, useState} from 'react';
import YouTube from 'react-youtube';
import axios from "axios";
import {ApiKey} from "../ApiKey/ApiKey";


const Trailer = ({id}) => {

    const [trailer,setTrailer] = useState([])

    const opts = {
        height: '390',
        width: '640',
        playerVars: {

        },
    };


    useEffect(()=>{
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${ApiKey}&language=en-US`)
            .then(({data})=>setTrailer(data.results))
    },[])
    console.log(trailer)

    return (
        <div className="container mx-auto pt-10 flex flex-wrap p-10 flex-col md:flex-row items-center mx-auto ">
            {
                trailer.slice(0,4).map(el=>(
                    <div className="basis-1/4 m-5 text-center flex justify-center">
                        <YouTube videoId={el.key} opts={opts}/>
                    </div>
                ))
            }
        </div>
    );
};

export default Trailer;