import React from 'react';
import { CurrencyRupeeOutlined } from '@mui/icons-material';
import { Box, Card, CardContent, Grid2 as Grid, Typography } from '@mui/material';
import { orderStyles } from '../../common/styles';
import { useSelector } from 'react-redux';

const ConfirmOrder = () => {
	const { cardStyle, productDetailContainer, cardContentStyle, addressContainer, productDescStyle, addressCardStyle } = orderStyles();
	const {
		selectedProduct: { name, category, description, price, quantity }
	} = useSelector((state) => state.product);

	return (
		<Grid container size={{ xs: 12 }}>
			<Card className={cardStyle} elevation={2}>
				<Grid className={productDetailContainer}>
					<CardContent className={cardContentStyle}>
						<Typography component='div' variant='h5' fontWeight={500}>
							{name}
						</Typography>
						<Typography variant='subtitle1' component='div'>
							Quantity: {quantity}
						</Typography>
						<Typography variant='subtitle1' component='div'>
							Category: <b className='categoryTextStyle'>{category}</b>
						</Typography>
						<Typography variant='subtitle1' component='div' id='descText' className={productDescStyle}>
							{description}
						</Typography>
						<Typography gutterBottom variant='h5' component='div' alignItems='center' display='flex' color='red'>
							Total Price: <CurrencyRupeeOutlined /> {quantity * price}
						</Typography>
					</CardContent>
				</Grid>
				<Grid className={addressContainer}>
					<CardContent className={addressCardStyle}>
						<Typography component='div' variant='h5' fontWeight={500}>
							Address Details:
						</Typography>
						<Typography variant='subtitle1' component='div'>
							dfhdfgh
						</Typography>
						<Typography variant='subtitle1' component='div'>
							Contact Number: dhy
						</Typography>
						<Typography variant='subtitle1' component='div'>
							{} {} {}fhjfhj
						</Typography>
						<Typography variant='subtitle1' component='div'>
							{}fhjfhj
						</Typography>
						<Typography variant='subtitle1' component='div'>
							{}fhjfhj
						</Typography>
					</CardContent>
				</Grid>
			</Card>
		</Grid>
	);
};

export default ConfirmOrder;
