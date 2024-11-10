import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Container, Grid2 as Grid, Link, ThemeProvider, Typography } from '@mui/material';
import TextInput from '../../common/TextInput';
import React from 'react';
import { loginTheme, loginStyles } from '../../common/styles';
import './auth.css';
import { CopyrightOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/reducers/userSlice';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

const Login = () => {
	const { loginForm, submitButton, footerStyle } = loginStyles();
	const dispatch = useDispatch();

	const loginValidator = zod.object({
		email: zod.string().min(1, { message: 'Email Required' }).email({ message: 'Invalid Email Address' }),
		password: zod.string().min(1, { message: 'Password Required' })
	});

	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm({
		defaultValues: { email: '', password: '' },
		resolver: zodResolver(loginValidator),
		mode: 'all'
	});

	const handleFormSubmit = (values) => {
		dispatch(loginUser(values));
	};

	return (
		<ThemeProvider theme={loginTheme}>
			<Container maxWidth='sm' fixed>
				<Box component='section' sx={{ p: 2, mt: 6 }} display='flex' flexDirection='column' alignItems='center'>
					<Avatar sx={{ backgroundColor: '#ff3131' }}>
						<LockOutlined />
					</Avatar>
					<Typography variant='h5'>Sign In</Typography>
					<form onSubmit={handleSubmit(handleFormSubmit)} className={loginForm}>
						<Grid container spacing={3} direction='column' width='100%'>
							<TextInput label='Email Address *' type='email' {...register('email')} error={!!errors.email} helperText={errors.email?.message} />
							<TextInput label='Password *' type='password' {...register('password')} error={!!errors.password} helperText={errors.password?.message} />
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
