import { Grid2 as Grid, TextField } from '@mui/material';
import React, { forwardRef } from 'react';

const TextInput = forwardRef(({ label, type, error, helperText, ...props }, ref) => {
	return (
		<Grid xs={12} sm={12}>
			<TextField variant='outlined' label={label} type={type} helperText={helperText} error={error} fullWidth {...props} inputRef={ref}></TextField>
		</Grid>
	);
});

TextInput.displayName = 'TextInput';

export default TextInput;
