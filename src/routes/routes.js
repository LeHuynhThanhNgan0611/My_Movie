import HomePage from '../Page/HomePage/HomePage';
import SingleMoviesPage from '../Page/SingleMoviesPage/SingleMoviesPage';
import SeriesPage from '../Page/SeriesPage/SeriesPage';
import DefaultPage from '../Page/DefaultPage/DefaultPage';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import SubLayout from '../Layouts/SubLayout/SubLayout';

export const publicRoutes = [
    { path: '/', Component: HomePage, Layout: MainLayout },
    { path: '/phim-le', Component: SingleMoviesPage, Layout: MainLayout },
    { path: '/phim-bo', Component: SeriesPage, Layout: MainLayout },
    { path: '*', Component: DefaultPage, Layout: SubLayout },
];
