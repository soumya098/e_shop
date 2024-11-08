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

function App() {
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
						</Route>
					</Routes>
				</Grid>
			</NavigationProvider>
		</BrowserRouter>
	);
}

export default App;
