import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../..';

function WatchMoviePage() {
    const movieId = useParams().id;
    const [movie, setMovie] = useState([]);
    const [videoWidth, setVideoWidth] = useState([]);
    const [videoId, setVideoId] = useState([]);
    const refDiv = useRef();

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

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, {
                params: {
                    api_key: API_KEY,
                },
            })
            .then((res) => {
                setVideoId(res.data.results[0].key);
            });
    }, []);

    useEffect(() => {
        setVideoWidth(refDiv.current.offsetWidth);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setVideoWidth(refDiv.current.offsetWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });
    console.log(videoWidth);

    return (
        <div ref={refDiv}>
            Đang xem phim {movie.title}
            <iframe
                width={videoWidth}
                height={(videoWidth * 9) / 16}
                src={`https://www.youtube.com/embed/${videoId}`}
            ></iframe>
        </div>
    );
}

export default WatchMoviePage;
