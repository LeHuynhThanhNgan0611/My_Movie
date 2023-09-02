import HomePage from '../Page/HomePage/HomePage';
import SingleMoviesPage from '../Page/SingleMoviesPage/SingleMoviesPage';
import SeriesPage from '../Page/SeriesPage/SeriesPage';
import DefaultPage from '../Page/DefaultPage/DefaultPage';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import SubLayout from '../Layouts/SubLayout/SubLayout';
import GenrePage from '../Page/GenrePage/GenrePage';
import CountryPage from '../Page/CountryPage/CountryPage';
import YearPage from '../Page/YearPage/YearPage';

export const publicRoutes = [
    { path: '/', Component: HomePage, Layout: MainLayout },
    { path: '/phim-le', Component: SingleMoviesPage, Layout: MainLayout },
    { path: '/phim-bo', Component: SeriesPage, Layout: MainLayout },
    { path: '/the-loai/:theloai', Component: GenrePage, Layout: MainLayout },
    { path: '/quoc-gia/:quocgia', Component: CountryPage, Layout: MainLayout },
    { path: '/nam-phat-hanh/:namPhatHanh', Component: YearPage, Layout: MainLayout },
    { path: '*', Component: DefaultPage, Layout: SubLayout },
];
