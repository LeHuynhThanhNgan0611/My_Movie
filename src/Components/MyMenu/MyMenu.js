import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function MyMenu({ children, list, Component, sx }) {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <Box sx={{ flexGrow: 0 }}>
            <Component onClick={handleOpenUserMenu} sx={sx}>
                {children}
            </Component>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {list.map((item) => (
                    <MenuItem
                        component={Link}
                        to={`/the-loai/${item.id}/page/1`}
                        key={item.name}
                        onClick={handleCloseUserMenu}
                    >
                        <Typography textAlign="center">{item.name}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}

export default MyMenu;
