import './App.css';
import Header from "./companents/header/header";
import './companents/header/header.css'
import {Routes, Route, useSearchParams} from "react-router-dom";
import Home from "./companents/home/home";
import Popular from "./companents/popular/popular";
import TopRated from "./companents/topRated/topRated";
import UpComing from "./companents/upComing/upComing";
import Latest from "./companents/Latest/latest";
import MovieDetails from "./companents/MovieDateils/movieDetails";
import Footer from "./companents/footer/Footer"
import SearchResult from "./companents/searchResult/SearchResult";


function App() {
    const [search, setSearch] = useSearchParams()
    const postQuery = search.get("result") || ""
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const query = form.search.value
        setSearch({result: query})
    }

    return (
        <div className="App">

            <Header handleSubmit={handleSubmit}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/popular" element={<Popular/>}/>
                <Route path="/toprated" element={<TopRated/>}/>
                <Route path="/upcoming" element={<UpComing/>}/>
                <Route path="/latest" element={<Latest/>}/>
                <Route path="/:id" element={<MovieDetails/>}/>
                <Route path="/search-results/:search" element={<SearchResult/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
