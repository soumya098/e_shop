import { Avatar, Box, Button, Container, Grid2 as Grid, Link, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import { loginStyles, loginTheme } from '../../common/styles';
import { LockOutlined } from '@mui/icons-material';
import TextInput from '../../common/TextInput';
import { CopyrightOutlined } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { createUser } from '../../store/reducers/userSlice';
import { useDispatch } from 'react-redux';

const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: '',
	contactNumber: ''
};

const Signup = () => {
	const { loginForm, submitButton, footerStyle } = loginStyles();
	const dispatch = useDispatch();

	const signUpSchema = zod
		.object({
			firstName: zod.string().min(2).max(15),
			lastName: zod.string().min(2).max(15),
			email: zod.string().email(),
			password: zod.string().min(8),
			confirmPassword: zod.string().min(8),
			contactNumber: zod.string().regex(/^\d{10}$/, { message: 'Mobile number must be exactly 10 digits' })
		})
		.superRefine(({ confirmPassword, password }, ctx) => {
			if (confirmPassword !== password) {
				ctx.addIssue({
					code: 'INVALID_PASSWORD',
					message: 'Passwords do not match',
					path: ['confirmPassword']
				});
			}
		});

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		defaultValues: initialValues,
		resolver: zodResolver(signUpSchema),
		mode: 'all'
	});

	const handleFormSubmit = (values) => {
		console.log(values);
		dispatch(createUser(values));
	};

	return (
		<ThemeProvider theme={loginTheme}>
			<Container maxWidth='sm' fixed>
				<Box component='section' sx={{ p: 2, mt: 6 }} display='flex' flexDirection='column' alignItems='center'>
					<Avatar sx={{ backgroundColor: '#ff3131' }}>
						<LockOutlined />
					</Avatar>
					<Typography variant='h5'>Sign Up</Typography>
					<form onSubmit={handleSubmit(handleFormSubmit)} className={loginForm}>
						<Grid container spacing={3} direction='column' width='100%'>
							<TextInput label='First Name *' type='text' {...register('firstName')} error={!!errors.firstName} helperText={errors.firstName?.message} />
							<TextInput label='Last Name *' type='text' {...register('lastName')} error={!!errors.lastName} helperText={errors.lastName?.message} />
							<TextInput label='Email Address *' type='email' {...register('email')} error={!!errors.email} helperText={errors.email?.message} />
							<TextInput label='Password *' type='password' {...register('password')} error={!!errors.password} helperText={errors.password?.message} />
							<TextInput
								label='Confirm Password *'
								type='password'
								{...register('confirmPassword')}
								error={!!errors.confirmPassword}
								helperText={errors.confirmPassword?.message}
							/>
							<TextInput
								label='Contact Number *'
								name='contactNumber'
								type='contactNumber'
								{...register('contactNumber')}
								error={!!errors.contactNumber}
								helperText={errors.contactNumber?.message}
							/>
						</Grid>
						<Button type='submit' fullWidth variant='contained' size='small' id='signInBtn' className={submitButton}>
							Sign Up
						</Button>
						<Grid container spacing={1} justifyContent='flex-end' width='100%'>
							<Link id='signInText' href='/login'>
								Already Have an account? Sign in
							</Link>
						</Grid>
					</form>
					<Grid justifyContent='center' display='flex' alignItems='flex-start'>
						<Typography variant='body' className={footerStyle}>
							Copyright <CopyrightOutlined /> <span> upGrad </span> 2024
						</Typography>
					</Grid>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default Signup;
