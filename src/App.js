import { Grid2 as Grid } from '@mui/material';
import './App.css';
import NavBar from './common/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import RequireAuth from './RequireAuth';
import AddProduct from './components/product/AddProduct';
import Home from './components/home/Home';
import { NavigationProvider } from './common/Navigation';
import { Toaster } from 'sonner';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { clearUser } from './store/reducers/userSlice';
import ProductDetail from './components/product/ProductDetail';
import Order from './components/product/Order';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const handleStorageChange = (event) => {
			if (event.key === 'persist:e_shop_root' && !event.newValue) {
				dispatch(clearUser());
			}
		};

		window.addEventListener('storage', handleStorageChange);

		return () => {
			window.removeEventListener('storage', handleStorageChange);
		};
	}, [dispatch]);

	return (
		<BrowserRouter>
			<NavigationProvider>
				<Grid container direction='column'>
					<NavBar />
					<Toaster
						visibleToasts={6}
						position='top-right'
						richColors
						toastOptions={{
							style: { marginTop: '25px', border: 'transparent', height: '60px' },
							duration: 5000
						}}
					/>
					<Routes>
						<Route exact path='/login' element={<Login />} />
						<Route exact path='/signup' element={<Signup />} />
						<Route element={<RequireAuth />}>
							<Route exact path='/' element={<Home />} />
							<Route exact path='/addProduct' element={<AddProduct />} />
							<Route path='/productDetail/:id' exact element={<ProductDetail />} />
							<Route path='/orderProduct' exact element={<Order />} />
						</Route>
					</Routes>
				</Grid>
			</NavigationProvider>
		</BrowserRouter>
	);
}

export default App;
