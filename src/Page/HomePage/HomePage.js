import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_KEY } from '../..';

function HomePage() {
    const { hotMovies, setHotMovies } = useState([]);
    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/movie/popular', {
                params: {
                    api_key: API_KEY,
                    language: 'vi-VN',
                },
            })
            .then((res) => {
                setHotMovies(res.data.results.slice(0, 10));
            });
    }, [setHotMovies]);
    console.log(hotMovies);
    return (
        <>
            {hotMovies.map((movie) => (
                <img src={'https://image.tmdb.org/t/p/w400' + movie.backdrop_path}></img>
            ))}
        </>
    );
}
export default HomePage;
