import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_KEY } from '../..';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Typography } from '@mui/material';

function HomePage() {
    const [hotMovies, setHotMovies] = useState([]);
    const [newSingleMovies, setNewSingleMovies] = useState([]);
    const [topRated, setTopRated] = useState([]);

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
    }, []);

    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/movie/upcoming', {
                params: {
                    api_key: API_KEY,
                    language: 'vi-VN',
                },
            })
            .then((res) => {
                setNewSingleMovies(res.data.results.slice(0, 10));
            });
    }, []);

    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/movie/top_rated', {
                params: {
                    api_key: API_KEY,
                    language: 'vi-VN',
                },
            })
            .then((res) => {
                setTopRated(res.data.results.slice(0, 10));
            });
    }, []);

    console.log(newSingleMovies);

    return (
        <>
            <AliceCarousel
                items={hotMovies.map((movie) => (
                    <div style={{ padding: '10px', position: 'relative' }}>
                        <img
                            draggable="false"
                            src={'https://image.tmdb.org/t/p/w400' + movie.backdrop_path}
                            style={{
                                width: '100%',
                                objectFit: 'cover',
                                padding: '20px 10px',
                                display: 'block',
                            }}
                        ></img>
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '25px',
                                left: '25px',
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: '#1976d2',
                                    padding: '5px',
                                    borderRadius: '5px',
                                    marginBottom: '10px',
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 500,
                                        fontSize: '16px',
                                        color: 'white',
                                    }}
                                >
                                    {movie.title}
                                </Typography>
                            </div>
                            <Typography
                                sx={{
                                    fontSize: '15px',
                                    color: 'white',
                                    marginBottom: '15px',
                                    marginLeft: '2px',
                                }}
                            >
                                {movie.release_date.slice(0, 4)}
                            </Typography>
                        </div>
                    </div>
                ))}
                responsive={{
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                    },
                }}
                disableButtonsControls
                disableDotsControls
                mouseTracking
                autoPlay
                autoPlayInterval={2000}
                infinite
            ></AliceCarousel>
            <Typography variant="h5">Phim lẻ mới nhất</Typography>
            <AliceCarousel
                items={newSingleMovies.map((movie) => (
                    <div style={{ padding: '10px', position: 'relative' }}>
                        <img
                            draggable="false"
                            src={'https://image.tmdb.org/t/p/w400' + movie.poster_path}
                            style={{
                                width: '100%',
                                objectFit: 'cover',
                                padding: '20px 10px',
                                display: 'block',
                            }}
                        ></img>
                        <div style={{ marginLeft: '10px' }}>
                            <Typography
                                sx={{
                                    fontWeight: 500,
                                    fontSize: '16px',
                                    textShadow: '0 0 5px 0 hsla(0,0%,64.7%,.75)',
                                }}
                            >
                                {movie.title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '14px',
                                    marginBottom: '15px',
                                    marginLeft: '2px',
                                    textShadow: '0 0 5px 0 hsla(0,0%,64.7%,.75)',
                                }}
                            >
                                {movie.release_date.slice(0, 4)}
                            </Typography>
                        </div>
                    </div>
                ))}
                responsive={{
                    0: {
                        items: 2,
                    },
                    768: {
                        items: 5,
                    },
                }}
                disableButtonsControls
                disableDotsControls
                mouseTracking
                autoPlay
                autoPlayInterval={2000}
                infinite
            ></AliceCarousel>
            <Typography variant="h5">Phim được đánh giá cao</Typography>
            <AliceCarousel
                items={topRated.map((movie) => (
                    <div style={{ padding: '10px', position: 'relative' }}>
                        <img
                            draggable="false"
                            src={'https://image.tmdb.org/t/p/w400' + movie.poster_path}
                            style={{
                                width: '100%',
                                objectFit: 'cover',
                                padding: '20px 10px',
                                display: 'block',
                            }}
                        ></img>
                        <div style={{ marginLeft: '10px' }}>
                            <Typography
                                sx={{
                                    fontWeight: 500,
                                    fontSize: '16px',
                                    textShadow: '0 0 5px 0 hsla(0,0%,64.7%,.75)',
                                }}
                            >
                                {movie.title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '14px',
                                    marginBottom: '15px',
                                    marginLeft: '2px',
                                    textShadow: '0 0 5px 0 hsla(0,0%,64.7%,.75)',
                                }}
                            >
                                {movie.release_date.slice(0, 4)}
                            </Typography>
                        </div>
                    </div>
                ))}
                responsive={{
                    0: {
                        items: 2,
                    },
                    768: {
                        items: 5,
                    },
                }}
                disableButtonsControls
                disableDotsControls
                mouseTracking
                autoPlay
                autoPlayInterval={2000}
                infinite
            ></AliceCarousel>
        </>
    );
}

export default HomePage;
