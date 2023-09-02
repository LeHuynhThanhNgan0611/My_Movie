import { AppBar, Container, Toolbar } from '@mui/material';

function Footer() {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Container maxWidth="lg">Đây là footer</Container>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;
