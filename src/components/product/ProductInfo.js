import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById, updateProductQuantity } from '../../store/reducers/productSlice';
import { Button, Grid2 as Grid, TextField, Typography } from '@mui/material';
import { productStyles } from '../../common/styles';
import './products.css';
import { CurrencyRupeeOutlined } from '@mui/icons-material';
import useGlobalNavigate from '../../hooks/useGlobalNavigate';

const ProductInfo = ({ id }) => {
	const dispatch = useDispatch();
	const { selectedProduct: productDetail, isLoading } = useSelector((state) => state.product);
	const { imgStyle, quantityField } = productStyles();
	const navigate = useGlobalNavigate();

	useEffect(() => {
		dispatch(fetchProductById(id));
	}, [id, dispatch]);

	console.log(productDetail);

	const onChange = (e) => {
		dispatch(updateProductQuantity(e.target.value));
	};

	return (
		<>
			<Grid container columnSpacing={20} rowSpacing={2} paddingBottom={10} justifyContent='center' marginTop={6}>
				{!isLoading && productDetail && (
					<>
						<Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: { md: 'flex-start', xs: 'center' } }}>
							<img src={productDetail.imageUrl} alt={productDetail.name} loading='lazy' className={imgStyle} />
						</Grid>
						<Grid size={{ xs: 12, md: 6 }} flex={1}>
							<Grid display='flex' justifyContent='flex-start' flexDirection='row' alignItems='center' container gap={2}>
								<Typography variant='h4' className='productName'>
									{productDetail.name}
								</Typography>
								<Grid className='availableQuantity'>
									<Typography variant='body' className='availableItems'>{`Available Quantity:  ${productDetail.availableItems}`}</Typography>
								</Grid>
							</Grid>
							<Grid gap={2} display='flex' flexDirection='column' marginTop={4}>
								<Grid display='flex' justifyContent='flex-start' flexDirection='row' alignItems='center' gap={1}>
									<Typography variant='body'>Category: </Typography>
									<Typography variant='body' fontWeight={600} className='categoryName'>
										{productDetail.category}
									</Typography>
								</Grid>
								<Typography variant='body' fontStyle='italic'>
									{productDetail.description}
								</Typography>
								<Typography variant='h5' className='price'>
									<CurrencyRupeeOutlined className='rupeeIcon' /> {productDetail.price}
								</Typography>
								<TextField
									name='quantity'
									type='number'
									variant='outlined'
									label='Enter Quantity*'
									value={productDetail.quantity}
									error={productDetail.quantity === ''}
									onChange={(e) => onChange(e)}
									helperText={productDetail.quantity === '' ? 'Min Quantity is 1' : ''}
									className={quantityField}></TextField>
								<Button
									id='orderBtn'
									onClick={() => {
										navigate('/orderProduct');
									}}>
									Place Order
								</Button>
							</Grid>
						</Grid>
					</>
				)}
			</Grid>
		</>
	);
};

export default ProductInfo;
