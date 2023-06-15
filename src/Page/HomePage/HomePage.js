import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_KEY } from '../..';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Typography } from '@mui/material';
import MovieItem from '../../Components/MovieItem/MovieItem';
import HotMovie from '../../Components/HotMovie/HotMovie';

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
                    <HotMovie movie={movie}></HotMovie>
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
                    <MovieItem movie={movie}></MovieItem>
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
                    <MovieItem movie={movie}></MovieItem>
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
