import HomePage from '../Page/HomePage/HomePage';
import SingleMoviesPage from '../Page/SingleMoviesPage/SingleMoviesPage';
import SeriesPage from '../Page/SeriesPage/SeriesPage';
import DefaultPage from '../Page/DefaultPage/DefaultPage';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import SubLayout from '../Layouts/SubLayout/SubLayout';
import GenrePage from '../Page/GenrePage/GenrePage';
import CountryPage from '../Page/CountryPage/CountryPage';
import YearPage from '../Page/YearPage/YearPage';
import WatchMoviePage from '../Page/WatchMoviePage/WatchMoviePage';
import SearchPage from '../Page/SearchPage/SearchPage';

export const publicRoutes = [
    { path: '/', Component: HomePage, Layout: MainLayout },
    { path: '/phim-le/page/:page', Component: SingleMoviesPage, Layout: MainLayout },
    { path: '/phim-bo', Component: SeriesPage, Layout: MainLayout },
    { path: '/the-loai/:theLoai/page/:page', Component: GenrePage, Layout: MainLayout },
    { path: '/quoc-gia/:quocGia', Component: CountryPage, Layout: MainLayout },
    { path: '/nam-phat-hanh/:namPhatHanh/page/:page', Component: YearPage, Layout: MainLayout },
    { path: '/xem-phim/:id', Component: WatchMoviePage, Layout: MainLayout },
    { path: '/tim-kiem/:text', Component: SearchPage, Layout: MainLayout },
    { path: '*', Component: DefaultPage, Layout: SubLayout },
];
