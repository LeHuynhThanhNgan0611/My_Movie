import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function HotMovie({ movie }) {
    return (
        <div style={{ padding: '10px', position: 'relative' }}>
            <Link draggable="false" to={'/xem-phim/' + movie.id}>
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
            </Link>
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
                        component={Link}
                        to={'/xem-phim/' + movie.id}
                        draggable="false"
                        sx={{
                            fontWeight: 500,
                            fontSize: '16px',
                            color: 'white',
                            textDecoration: 'none',
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
    );
}

export default HotMovie;
