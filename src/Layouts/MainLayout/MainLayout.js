import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import SideBar from '../../Components/SideBar/SideBar';

function MainLayout({ children }) {
    return (
        <>
            <Header></Header>
            {children}
            <SideBar></SideBar>
            <Footer></Footer>
        </>
    );
}

export default MainLayout;
