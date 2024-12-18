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

export const cardStyles = makeStyles(() => ({
	cardContentStyle: {
		paddingTop: '20px !important',
		height: 100,
		overflowY: 'auto'
	},
	productNameStyle: {
		overflow: 'hidden',
		display: '-webkit-box',
		WebkitLineClamp: '2',
		textOverflow: 'ellipsis',
		WebkitBoxOrient: 'vertical'
	},
	productDescStyle: { fontStyle: 'italic' },
	cardActions: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-end'
	},
	buyBtnStyle: {
		backgroundColor: '#3f51b5 !important'
	}
}));

export const productStyles = makeStyles(() => ({
	footerStyle: {
		color: 'lightslategrey',
		display: 'flex',
		alignItems: 'center',
		gap: '6px',
		paddingTop: '24px'
	},
	shoppingCartIcon: {
		borderRadius: '50%',
		backgroundColor: '#F33A6A',
		padding: '12px',
		color: 'white'
	},
	quantityField: {
		width: '30%',
		marginTop: 2
	},
	deleteConfirmation: {
		'& .MuiDialog-paper': { width: '30%', maxHeight: 460, height: 200 }
	},
	imgStyle: {
		maxHeight: '400px',
		width: '90%',
		objectFit: 'cover'
	}
}));

export const addressStyles = makeStyles({
	labelStyle: {
		width: '40%',
		fontSize: 'medium !important',
		color: 'black !important'
	}
});

export const orderStyles = makeStyles(() => ({
	stepperContainer: {
		margin: '4% auto',
		marginBottom: 0
	},
	backButton: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		gap: '16px',
		marginBottom: '4%'
	},
	stepperLabelStyle: { pointerEvents: 'none' },
	cardStyle: {
		flex: 1,
		display: 'flex',
		margin: '0 8.5% 0 8.5%'
	},
	productDetailContainer: { display: 'flex', flexDirection: 'column', flex: 1 },
	cardContentStyle: {
		flex: '1 0 auto',
		display: 'flex',
		flexDirection: 'column',
		gap: 20,
		padding: '48px 24px !important'
	},
	prodDescStyle: { color: 'text.secondary', fontStyle: 'italic' },
	addressContainer: {
		display: 'flex',
		flexDirection: 'column',
		borderLeft: '1.5px solid lightgrey',
		flex: 0.5
	},
	addressCardStyle: { display: 'flex', flexDirection: 'column', gap: 6, padding: '48px 24px !important' }
}));
