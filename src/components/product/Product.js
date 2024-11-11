import { Button, Card, CardActions, CardContent, CardMedia, Grid2 as Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import { cardStyles } from '../../common/styles';
import { CurrencyRupeeOutlined, Delete, ModeEdit } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import useGlobalNavigate from '../../hooks/useGlobalNavigate';

const Product = ({ id, name, category, price, description, manufacturer, imageUrl, availableItems }) => {
	const { isAdmin } = useSelector((state) => state.user);
	const { cardContentStyle, productNameStyle, productDescStyle, cardActions, buyBtnStyle } = cardStyles();
	const navigate = useGlobalNavigate();

	const handleOnNavigate = (path) => {
		navigate(path);
	};

	return (
		<Card elevation={6} sx={{ width: 380, height: 550 }}>
			<CardMedia component='img' height='360' image={imageUrl} alt={name} />
			<CardContent className={cardContentStyle}>
				<Grid container display='flex' flexDirection='row' justifyContent='space-between' spacing={2}>
					<Typography gutterBottom variant='h5' component='div' className={productNameStyle} flex={2}>
						{name}
					</Typography>
					<Typography gutterBottom variant='h5' component='div' alignItems='center' display='flex' flex={1}>
						<CurrencyRupeeOutlined /> {price}
					</Typography>
				</Grid>
				<Typography variant='body2' className={productDescStyle}>
					{description}
				</Typography>
			</CardContent>
			<CardActions className={cardActions}>
				<Grid justifyContent='flex-end'>
					<Button size='small' variant='contained' className={buyBtnStyle} onClick={() => handleOnNavigate(`/productDetail/${id}`)}>
						Buy
					</Button>
				</Grid>
				{isAdmin && (
					<Grid justifyContent='flex-end' display='flex' flexDirection='row' alignItems='flex-end' flex={1} gap={1}>
						<IconButton aria-label='edit' size='medium' onClick={() => {}}>
							<ModeEdit fontSize='medium' />
						</IconButton>
						<IconButton aria-label='delete' size='medium' onClick={() => {}}>
							<Delete fontSize='medium' />
						</IconButton>
					</Grid>
				)}
			</CardActions>
		</Card>
	);
};

export default Product;
