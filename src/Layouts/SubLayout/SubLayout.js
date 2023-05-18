import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

function SubLayout({ children }) {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    );
}

export default SubLayout;
