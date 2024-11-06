import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Container, Grid2 as Grid, Link, ThemeProvider, Typography } from '@mui/material';
import TextInput from '../../common/TextInput';
import React, { useEffect } from 'react';
import { loginTheme, loginStyles } from '../../common/styles';
import './auth.css';
import { CopyrightOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/reducers/userSlice';
import { useSelector } from 'react-redux';
import useGlobalNavigate from '../../hooks/useGlobalNavigate';

const Login = () => {
	const { loginForm, submitButton, footerStyle } = loginStyles();
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const { isLoggedIn } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigateTo = useGlobalNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(loginUser({ email, password }));
	};

	// Perform navigation once login is successful
	useEffect(() => {
		if (isLoggedIn) {
			navigateTo('/');
		}
	}, [isLoggedIn, navigateTo]);

	return (
		<ThemeProvider theme={loginTheme}>
			<Container maxWidth='sm' fixed>
				<Box component='section' sx={{ p: 2, mt: 6 }} display='flex' flexDirection='column' alignItems='center'>
					<Avatar sx={{ backgroundColor: '#ff3131' }}>
						<LockOutlined />
					</Avatar>
					<Typography variant='h5'>Sign In</Typography>
					<form onSubmit={handleSubmit} className={loginForm}>
						<Grid container spacing={3} direction='column' width='100%'>
							<TextInput label='Email Address *' name='email' type='email' value={email} handleChange={(e) => setEmail(e.target.value)} error='' />
							<TextInput label='Password *' name='password' type='password' value={password} handleChange={(e) => setPassword(e.target.value)} />
						</Grid>
						<Button type='submit' fullWidth variant='contained' size='small' id='signInBtn' className={submitButton}>
							Sign in
						</Button>
						<Grid container spacing={1} alignContent='start' width='100%'>
							<Link id='signInText' href='/signup'>
								Don't Have an account? Sign Up
							</Link>
						</Grid>
					</form>
					<Grid justifyContent='center' display='flex' alignItems='flex-start' marginTop='100px'>
						<Typography variant='body' className={footerStyle}>
							Copyright <CopyrightOutlined /> <span> upGrad </span> 2024
						</Typography>
					</Grid>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default Login;
