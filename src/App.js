import { Grid2 as Grid } from '@mui/material';
import './App.css';
import NavBar from './common/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import RequireAuth from './RequireAuth';
import AddProduct from './components/product/AddProduct';

function App() {
	return (
		<BrowserRouter>
			<Grid container direction='column'>
				<NavBar />

				<Routes>
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/signup' element={<Signup />} />
					<Route element={<RequireAuth />}>
						<Route exact path='/' element={<Home />} />
						<Route exact path='/addProduct' element={<AddProduct />} />
					</Route>
				</Routes>
			</Grid>
		</BrowserRouter>
	);
}

export default App;

const Home = () => {
	return (
		<>
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
		</>
	);
};
