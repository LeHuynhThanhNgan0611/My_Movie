import { Button, Container, Grid, Pagination, PaginationItem } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_KEY } from '../..';
import MovieItem from '../../Components/MovieItem/MovieItem';

function SingleMoviesPage() {
    const { page } = useParams();
    const [singleMovie, setSingleMovie] = useState([]);
    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/discover/movie', {
                params: {
                    api_key: API_KEY,
                    language: 'vi-VN',
                    page: page,
                },
            })
            .then((res) => {
                setSingleMovie(res.data.results);
            });
    }, [page]);
    return (
        <Container maxWidth="xl">
            <Grid container spacing={0}>
                {singleMovie.map((movie) => (
                    <Grid xs={6} sm={3} md={2.4} item key={movie.id}>
                        <MovieItem movie={movie}></MovieItem>
                    </Grid>
                ))}
            </Grid>
            <Pagination
                page={page - 0}
                count={10}
                color="primary"
                renderItem={(item) => (
                    <PaginationItem component={Link} to={`/phim-le/page/${item.page}`} {...item} />
                )}
            />
        </Container>
    );
}

export default SingleMoviesPage;
