import SearchAppBar from "./components/SearchAppBar.jsx";
import axios from "axios";
import {Route, Routes, useNavigate} from "react-router-dom";
import ResultsPage from "./components/ResultsPage.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import {useState} from "react";


const ApiToken = import.meta.env.VITE_TMDB_API_TOKEN;
const BaseURL = "https://api.themoviedb.org/3"
// const endpoint = `search/movie`;

const App = () => {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/now_playing', {
                headers: {
                    Authorization: `Bearer ${ApiToken}`,
                },
            });
            const data = await response.json();
            console.log(data);
            setMovies(data.results);
            navigate('/results');
        } catch (err) {
            console.log("ERROR: ", err);
            setError("Failed to load movies.");
            navigate('/error');
        }
    };

    const handleSearch = async (searchTerm) => {
        try {
            const response = await axios.get(`${BaseURL}/search/movie`, {
                headers: {
                    Authorization: `Bearer ${ApiToken}`,
                },
                params: {
                    query: searchTerm,
                },
            });

            const results = response.data.results;

            if (results.length === 0) {
                setError(`No movies found for "${searchTerm}"`)
                navigate(`/error`);
                return [];
            }

            console.log(response.data.results)
            setMovies(response.data.results)
            navigate('/results');
        } catch (err) {
            console.error('Search failed:', err);
            setError("Search failed. Please try again.");
            navigate('/error');
        }
    };


    return (
        <>
            <SearchAppBar onSearch={handleSearch} handleClick={handleClick}/>
            <Routes>
                <Route path="/" element={
                    <div style={{
                        height: "100vh",
                        backgroundImage: `url('/images/landing-bg.jpg')`,
                        backgroundSize: "cover",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <h1>
                            Welcome to The Movie Database
                        </h1>
                    </div>
                }/>
                <Route path="/results" element={<ResultsPage movieList={movies}/>}/>
                <Route path="/error" element={<ErrorPage message={error}/>}/>
            </Routes>
        </>
    )
}


export default App;