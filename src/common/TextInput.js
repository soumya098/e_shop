import { Grid2 as Grid, TextField } from '@mui/material';
import React from 'react';

const TextInput = ({ label, name, value, type, handleChange, error }) => {
	return (
		<Grid xs={12} sm={12}>
			<TextField variant='outlined' label={label} value={value} name={name} type={type} onChange={handleChange} helperText={error} error={Boolean(error)} fullWidth></TextField>
		</Grid>
	);
};

export default TextInput;
