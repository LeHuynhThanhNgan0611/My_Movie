import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function MovieItem({ movie }) {
    return (
        <div style={{ padding: '10px', position: 'relative' }}>
            <Link draggable="false" to={'/xem-phim/' + movie.id}>
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
            </Link>
            <div style={{ marginLeft: '10px' }}>
                <Typography
                    component={Link}
                    to={'/xem-phim/' + movie.id}
                    draggable="false"
                    noWrap
                    title={movie.title}
                    sx={{
                        display: 'block',
                        fontWeight: 500,
                        fontSize: '16px',
                        textShadow: '0 0 5px 0 hsla(0,0%,64.7%,.75)',
                        textDecoration: 'none',
                        color: 'inherit',
                    }}
                >
                    {movie.title}
                </Typography>
                <Typography
                    sx={{
                        fontSize: '14px',
                        marginBottom: '15px',
                        marginLeft: '2px',
                        color: 'grey',
                        textShadow: '0 0 5px 0 hsla(0,0%,64.7%,.75)',
                    }}
                >
                    {movie.release_date.slice(0, 4)}
                </Typography>
            </div>
        </div>
    );
}

export default MovieItem;
