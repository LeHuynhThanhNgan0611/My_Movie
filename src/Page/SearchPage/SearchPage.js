import { Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../..';
import MovieItem from '../../Components/MovieItem/MovieItem';

function SearchPage() {
    const { text } = useParams();
    const [searchMovie, setSearchMovie] = useState([]);
    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: API_KEY,
                    language: 'vi-VN',
                    query: text,
                },
            })
            .then((res) => {
                setSearchMovie(res.data.results);
            });
    }, [text]);
    return (
        <Container maxWidth="xl">
            <Typography variant="h6">Kết quả tìm kiếm:{text}</Typography>
            <Grid container spacing={0}>
                {searchMovie &&
                    searchMovie.map((movie) => (
                        <Grid xs={6} sm={3} md={2.4} item key={movie.id}>
                            <MovieItem movie={movie}></MovieItem>
                        </Grid>
                    ))}
            </Grid>
        </Container>
    );
}

export default SearchPage;
