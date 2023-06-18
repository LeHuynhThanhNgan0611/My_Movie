import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import MyMenu from '../MyMenu/MyMenu';
import SearchBar from '../SearchBar/SearchBar';

const pages = [
    {
        name: 'Trang chủ',
        link: '/',
        component: 'link',
    },
    {
        name: 'Phim lẻ',
        link: '/phim-le/page/1',
        component: 'link',
    },
    {
        name: 'Phim bộ',
        link: '/phim-bo',
        component: 'link',
    },
    {
        name: 'Thể loại',
        list: [
            {
                id: 28,
                name: 'Phim Hành Động',
            },
            {
                id: 12,
                name: 'Phim Phiêu Lưu',
            },
            {
                id: 16,
                name: 'Phim Hoạt Hình',
            },
            {
                id: 35,
                name: 'Phim Hài',
            },
            {
                id: 80,
                name: 'Phim Hình Sự',
            },
            {
                id: 99,
                name: 'Phim Tài Liệu',
            },
            {
                id: 18,
                name: 'Phim Chính Kịch',
            },
            {
                id: 10751,
                name: 'Phim Gia Đình',
            },
            {
                id: 14,
                name: 'Phim Giả Tượng',
            },
            {
                id: 36,
                name: 'Phim Lịch Sử',
            },
            {
                id: 27,
                name: 'Phim Kinh Dị',
            },
            {
                id: 10402,
                name: 'Phim Nhạc',
            },
            {
                id: 9648,
                name: 'Phim Bí Ẩn',
            },
            {
                id: 10749,
                name: 'Phim Lãng Mạn',
            },
            {
                id: 878,
                name: 'Phim Khoa Học Viễn Tưởng',
            },
            {
                id: 10770,
                name: 'Chương Trình Truyền Hình',
            },
            {
                id: 53,
                name: 'Phim Gây Cấn',
            },
            {
                id: 10752,
                name: 'Phim Chiến Tranh',
            },
            {
                id: 37,
                name: 'Phim Miền Tây',
            },
        ],
        component: 'menu',
    },
    {
        name: 'Quốc gia',
        list: [
            { name: 'Việt Nam', link: '/quoc-gia/viet-nam' },
            { name: 'Hàn Quốc', link: '/quoc-gia/han-quoc' },
            { name: 'Hoa Ngữ', link: '/quoc-gia/hoa-ngu' },
            { name: 'Thái Lan', link: '/quoc-gia/thai-lan' },
        ],
        component: 'menu',
    },
];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => {
                                if (page.component == 'link') {
                                    return (
                                        <MenuItem
                                            component={Link}
                                            to={page.link}
                                            key={page.name}
                                            onClick={handleCloseNavMenu}
                                        >
                                            <Typography textAlign="center">{page.name}</Typography>
                                        </MenuItem>
                                    );
                                } else if (page.component === 'menu') {
                                    return (
                                        <MyMenu Component={MenuItem} list={page.list}>
                                            {page.name}
                                        </MyMenu>
                                    );
                                }
                            })}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => {
                            if (page.component === 'link') {
                                return (
                                    <Button
                                        component={Link}
                                        to={page.link}
                                        key={page.name}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page.name}
                                    </Button>
                                );
                            } else if (page.component === 'menu') {
                                return (
                                    <MyMenu
                                        key={page.name}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                        Component={Button}
                                        list={page.list}
                                    >
                                        {page.name}
                                    </MyMenu>
                                );
                            }
                        })}
                    </Box>
                    <SearchBar></SearchBar>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
