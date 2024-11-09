import { SearchOutlined } from '@mui/icons-material';
import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Box, Button, IconButton, InputAdornment, Menu, MenuItem, TextField, ThemeProvider, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { navBarTheme, navigationStyles } from './styles';
import { MoreVertOutlined } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { clearUser } from '../store/reducers/userSlice';
import { useDispatch } from 'react-redux';
import useGlobalNavigate from '../hooks/useGlobalNavigate';
import useDebounce from '../hooks/useDebounce';
import { filterProducts } from '../store/reducers/productSlice';
import { setProductSearchedText } from '../store/reducers/filterSlice';

const NavBar = () => {
	const { toolBarStyle, grow, searchField, searchIcon } = navigationStyles();
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
	const { isLoggedIn, isAdmin } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useGlobalNavigate();
	const { category, searchedText } = useSelector((state) => state.filter.productFilter);
	const [searchQuery, setSearchQuery] = useState(searchedText);
	const debouncedQuery = useDebounce(searchQuery, 500);

	const handleOnNavigate = (route) => {
		navigate(route);
	};

	const handleLogOut = () => {
		dispatch(clearUser());
	};

	useEffect(() => {
		dispatch(setProductSearchedText(debouncedQuery));
	}, [debouncedQuery, dispatch]);

	useEffect(() => {
		dispatch(filterProducts({ searchedText: debouncedQuery, category }));
	}, [debouncedQuery, dispatch, category]);

	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
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
			<AppBar position='sticky'>
				<Toolbar className={toolBarStyle}>
					<IconButton edge='start' color='inherit' aria-label='open drawer' onClick={() => handleOnNavigate('/')}>
						<ShoppingCart />
					</IconButton>

					<Typography variant='h6' noWrap sx={{ display: { xs: 'none', md: 'inline-block' } }}>
						upGrad E-Shop
					</Typography>

					<Box className={grow}>
						<TextField
							id='input-with-sx'
							placeholder='Search...'
							autoComplete='off'
							value={searchQuery}
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
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</Box>

					<>
						{isLoggedIn ? (
							<Box sx={{ display: { md: 'flex', xs: 'none' }, minWidth: '300px' }} flexDirection='row' justifyContent='space-between'>
								<Button color='inherit' className='navigationBtn' onClick={() => handleOnNavigate('/')}>
									Home
								</Button>

								{isAdmin && (
									<Button color='inherit' className='navigationBtn' onClick={() => handleOnNavigate('/addProduct')}>
										Add Product
									</Button>
								)}

								<Button color='error' variant='contained' className='navigationBtn' onClick={() => handleLogOut()}>
									logout
								</Button>
							</Box>
						) : (
							<Box sx={{ display: { md: 'flex', xs: 'none' } }} flexDirection='row' gap={2} justifyContent='space-between'>
								<Button variant='text' color='inherit' className='navigationBtn' onClick={() => handleOnNavigate('/login')}>
									Login
								</Button>

								<Button variant='text' color='inherit' className='navigationBtn' onClick={() => handleOnNavigate('/signup')}>
									Sign UP
								</Button>
							</Box>
						)}
					</>

					<Box sx={{ display: { md: 'none', xs: 'flex' } }} justifySelf='flex-end'>
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
