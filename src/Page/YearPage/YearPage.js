import { Container, Grid, Pagination, PaginationItem } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import MovieItem from '../../Components/MovieItem/MovieItem';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY } from '../..';

function YearPage() {
    const { namPhatHanh, page } = useParams();
    const [yearMovie, setYearMovie] = useState();
    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/discover/movie', {
                params: {
                    api_key: API_KEY,
                    language: 'vi-VN',
                    page: page,
                    primary_release_year: namPhatHanh,
                },
            })
            .then((res) => {
                setYearMovie(res.data.results);
            });
    }, [namPhatHanh, page]);
    return (
        <Container maxWidth="xl">
            <Grid container spacing={0}>
                {yearMovie &&
                    yearMovie.map((movie) => (
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
                    <PaginationItem
                        component={Link}
                        to={`/nam-phat-hanh/${namPhatHanh}/page/${item.page}`}
                        {...item}
                    />
                )}
            />
        </Container>
    );
}

export default YearPage;
