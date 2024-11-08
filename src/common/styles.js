import { alpha } from '@mui/material';
import { createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const navBarTheme = createTheme({
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: '#3f51b5'
				}
			}
		},
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: '5px',
					fontSize: '12px'
				}
			}
		}
	}
});

export const loginTheme = createTheme({
	components: {
		MuiTypography: {
			styleOverrides: {
				root: {
					paddingBottom: '8px',
					paddingTop: '8px'
				}
			}
		},
		MuiFormHelperText: {
			styleOverrides: {
				root: {
					marginLeft: 0,
					fontSize: '0.8em'
				}
			}
		}
	}
});

export const navigationStyles = makeStyles(() => ({
	toolBarStyle: {
		backgroundColor: '#3f51b5',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '65px',
		gap: 6
	},
	grow: {
		flexGrow: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center'
	},
	menuButton: {
		marginRight: '20px'
	},
	searchField: {
		maxWidth: '40ch',
		width: '100%',
		borderRadius: '5px',
		backgroundColor: alpha('#fff', 0.15),
		'& .MuiInputBase-input': {
			padding: '8px 8px 8px 0px',
			color: 'white',
			'&:hover': {
				borderColor: 'transparent !important'
			}
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				border: 'none'
			},
			'&:hover fieldset': {
				border: 'none'
			},
			'&.Mui-focused fieldset': {
				border: 'none'
			}
		}
	},
	searchIcon: {
		color: 'white'
	}
}));

export const loginStyles = makeStyles(() => ({
	loginForm: {
		marginTop: '10px',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	submitButton: {
		backgroundColor: '#3f51b5',
		color: 'white',
		'&:hover': {
			backgroundColor: '#3f51b5'
		}
	},
	footerStyle: {
		marginTop: '20px !important',
		color: 'lightslategrey',
		display: 'flex',
		alignItems: 'center',
		gap: '6px'
	}
}));
