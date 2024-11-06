import { Grid2 as Grid } from '@mui/material';
import './App.css';
import NavBar from './common/NavBar';

function App() {
	return (
		<Grid container direction='column' height='100vh'>
			<NavBar />
			<Grid>
				<h1>Welcome to the E-Commerce Shop!</h1>
			</Grid>
			<Grid>
				<p>This is a sample application built using React and Material-UI. To see the products, navigate to the 'Products' tab in the navigation bar.</p>
			</Grid>
			<Grid>
				<p>You can sign up or log in to access the 'My Account' section, where you can manage your orders and add products to your cart.</p>
			</Grid>
			<Grid>
				<p>To add more features or customize the application, you can refer to the documentation and source code provided by Material-UI, React, and Redux Toolkit.</p>
			</Grid>
		</Grid>
	);
}

export default App;
