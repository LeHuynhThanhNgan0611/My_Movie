import { Container, Grid, Pagination, PaginationItem } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import MovieItem from '../../Components/MovieItem/MovieItem';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY } from '../..';

function GenrePage() {
    const { theLoai, page } = useParams();
    const [generMovie, setGenerMovie] = useState();
    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/movie/now_playing', {
                params: {
                    api_key: API_KEY,
                    language: 'vi-VN',
                    page: page,
                    with_gener: theLoai,
                },
            })
            .then((res) => {
                setGenerMovie(res.data.results);
            });
    }, [theLoai, page]);
    return (
        <Container maxWidth="xl">
            <Grid container spacing={0}>
                {generMovie &&
                    generMovie.map((movie) => (
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
                        to={`/the-loai/${theLoai}/page/${item.page}`}
                        {...item}
                    />
                )}
            />
        </Container>
    );
}

export default GenrePage;
