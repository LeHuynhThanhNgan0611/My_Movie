import { Button, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const years = [];
for (let year = 2023; year >= 1947; year--) {
    years.push(year);
}
const movie = ['Phim 1', 'Phim 2', 'Phim 3'];
function SideBar() {
    return (
        <Container>
            <Typography variant="h6">Năm phát hành</Typography>
            <Grid container spacing={3}>
                {years.map((year) => (
                    <Grid xs={2.4} item key={years}>
                        <Button
                            component={Link}
                            to={`/nam-phat-hanh/${year}/page/1`}
                            variant="outlined"
                        >
                            {year}
                        </Button>
                    </Grid>
                ))}
            </Grid>
            <Typography style={{ marginTop: '50px' }} variant="h6">
                Phim hot
            </Typography>
            <Grid container spacing={3}>
                {movie.map((movie) => (
                    <Grid xs={12} item key={movie}>
                        <Button fullWidth variant="outlined">
                            {movie}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default SideBar;
