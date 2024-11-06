import { Avatar, Box, Button, Container, Grid2 as Grid, Link, ThemeProvider, Typography } from '@mui/material';
import React, { useState } from 'react';
import { loginStyles, loginTheme } from '../../common/styles';
import { LockOutlined } from '@mui/icons-material';
import TextInput from '../../common/TextInput';
import { CopyrightOutlined } from '@mui/icons-material';

const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: '',
	contactNumber: ''
};

const Signup = () => {
	const [formState, setFormState] = useState(initialValues);
	const { loginForm, submitButton, footerStyle } = loginStyles();

	const handleChange = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formState);
	};

	return (
		<ThemeProvider theme={loginTheme}>
			<Container maxWidth='sm' fixed>
				<Box component='section' sx={{ p: 2, mt: 6 }} display='flex' flexDirection='column' alignItems='center'>
					<Avatar sx={{ backgroundColor: '#ff3131' }}>
						<LockOutlined />
					</Avatar>
					<Typography variant='h5'>Sign Up</Typography>
					<form onSubmit={handleSubmit} className={loginForm}>
						<Grid container spacing={3} direction='column' width='100%'>
							<TextInput label='First Name *' name='firstName' type='text' value={formState.firstName} handleChange={(e) => handleChange(e)} />
							<TextInput label='Last Name *' name='lastName' type='text' value={formState.lastName} handleChange={(e) => handleChange(e)} />
							<TextInput label='Email Address *' name='email' type='email' value={formState.email} handleChange={(e) => handleChange(e)} />
							<TextInput label='Password *' name='password' type='password' value={formState.password} handleChange={(e) => handleChange(e)} />
							<TextInput label='Confirm Password *' name='confirmPassword' type='password' value={formState.confirmPassword} handleChange={(e) => handleChange(e)} />
							<TextInput label='Contact Number *' name='contactNumber' type='contactNumber' value={formState.contactNumber} handleChange={(e) => handleChange(e)} />
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
