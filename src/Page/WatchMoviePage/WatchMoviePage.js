import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../..';

function WatchMoviePage() {
    const movieId = useParams().id;
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${movieId}`, {
                params: {
                    api_key: API_KEY,
                    language: 'vi-VN',
                },
            })
            .then((res) => {
                setMovie(res.data);
            });
    }, []);
    return <>Đang xem phim {movie.title}</>;
}

export default WatchMoviePage;
