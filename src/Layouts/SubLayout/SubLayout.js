import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

function SubLayout({ children, changeTheme }) {
    return (
        <>
            <Header changeTheme={changeTheme}></Header>
            {children}
            <Footer></Footer>
        </>
    );
}

export default SubLayout;
