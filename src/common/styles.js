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
		}
	}
});

export const navigationStyles = makeStyles(({ theme }) => ({
	toolBarStyle: {
		backgroundColor: '#3f51b5',
		padding: '0 24px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '65px'
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
		width: '50ch',
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
