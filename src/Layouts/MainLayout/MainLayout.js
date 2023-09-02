import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import SideBar from '../../Components/SideBar/SideBar';
import { Container, Grid } from '@mui/material';

function MainLayout({ children }) {
    return (
        <>
            <Header></Header>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item xs={12} sm={12} md={8}>
                        {children}
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                            <SideBar></SideBar>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
}

export default MainLayout;
