import { SearchOutlined } from '@mui/icons-material';
import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Box, Button, IconButton, InputAdornment, Menu, MenuItem, TextField, ThemeProvider, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { navBarTheme, navigationStyles } from './styles';
import { MoreVertOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
	const { toolBarStyle, grow, searchField, searchIcon } = navigationStyles();
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(false);
	const navigate = useNavigate();

	const handleOnSearch = () => {};
	const handleOnNavigate = (route) => {
		navigate(route);
	};

	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(false);
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};
	const mobileMenuId = 'menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}>
			<MenuItem>
				<Button color='inherit'>Login</Button>
			</MenuItem>
			<MenuItem>
				<Button color='inherit'>Sign UP</Button>
			</MenuItem>
		</Menu>
	);
	return (
		<ThemeProvider theme={navBarTheme}>
			<AppBar position='static'>
				<Toolbar className={toolBarStyle}>
					<IconButton edge='start' color='inherit' aria-label='open drawer'>
						<ShoppingCart />
					</IconButton>

					<Typography variant='h6' noWrap sx={{ display: { xs: 'none', sm: 'inline-block' } }}>
						upGrad E-Shop
					</Typography>

					<Box className={grow}>
						<TextField
							id='input-with-sx'
							placeholder='Search...'
							autoComplete='off'
							className={searchField}
							slotProps={{
								input: {
									startAdornment: (
										<InputAdornment position='start'>
											<SearchOutlined className={searchIcon} />
										</InputAdornment>
									)
								}
							}}
							onChange={handleOnSearch}
						/>
					</Box>

					<Box sx={{ display: { sm: 'flex', xs: 'none' } }}>
						<Button color='inherit' className='navigationBtn' onClick={handleOnNavigate('/login')}>
							Login
						</Button>

						<Button color='inherit' className='navigationBtn' onClick={handleOnNavigate('/signup')}>
							Sign UP
						</Button>
					</Box>

					<Box sx={{ display: { sm: 'none', xs: 'flex' } }}>
						<IconButton aria-label='show more' aria-controls={mobileMenuId} aria-haspopup='true' onClick={handleMobileMenuOpen} color='inherit'>
							<MoreVertOutlined />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
		</ThemeProvider>
	);
};

export default NavBar;
