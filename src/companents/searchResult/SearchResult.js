import React,{useState, useEffect} from 'react';
import axios from "axios"
import {useParams} from "react-router-dom";
import {ApiKey} from "../ApiKey/ApiKey";

const SearchResult = () => {
    const {search} = useParams()
const [result, setResult] = useState([])
    useEffect( () => {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${search}`)
            .then(({data}) => setResult(data))
    },[search])
    console.log(result)
    return (
        <div>

        </div>
    );
};

export default SearchResult;