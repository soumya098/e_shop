import { Box, Button, Grid2 as Grid, Paper, Step, StepButton, Stepper } from '@mui/material';
import React, { useState } from 'react';
import { STEP_OPTIONS } from '../../constants';
import { orderStyles } from '../../common/styles';
import Address from '../address/Address';
import ConfirmOrder from '../order/ConfirmOrder';
import ProductInfo from './ProductInfo';
import { useSelector } from 'react-redux';

const Order = () => {
	const steps = STEP_OPTIONS;
	const { stepperContainer, stepperLabelStyle, backButton } = orderStyles();
	const [activeStep, setActiveStep] = useState(1);
	const [completed, setCompleted] = useState({ [0]: true });
	const { selectedProduct } = useSelector((state) => state.product);

	const handleBack = () => {
		if (activeStep === 0) {
			// dispatch({ type: 'UPDATE_QUANTITY', quantity: 1 });
			// navigateTo('/');
		}
		setCompleted((prevState) => ({
			...prevState,
			[activeStep]: false,
			[activeStep - 1]: false
		}));
		setActiveStep(activeStep - 1);
	};

	const handleNext = () => {
		console.log(activeStep);

		if (activeStep === 2) {
			//
			// } else if (activeStep === 1) {
			// if (selectedAddress && Object.keys(selectedAddress).length > 0) {
			// 	setCompleted((prevState) => ({
			// 		...prevState,
			// 		[activeStep]: true
			// 	}));
			// 	setActiveStep(activeStep + 1);
			// } else {
			// 	showNotification('Please Select Address', 'error');
			// }
		} else {
			setCompleted((prevState) => ({
				...prevState,
				[activeStep]: true
			}));
			setActiveStep(activeStep + 1);
		}
	};

	return (
		<Grid container spacing={2} direction='column' justifyContent='center'>
			<Grid className={stepperContainer} size={{ xs: 10 }} marginTop={4}>
				<Paper elevation={2} sx={{ padding: 2 }}>
					<Stepper nonLinear activeStep={activeStep}>
						{steps.map((label, index) => (
							<Step key={label} completed={completed[index]}>
								<StepButton color='inherit' className={stepperLabelStyle}>
									{label}
								</StepButton>
							</Step>
						))}
					</Stepper>
				</Paper>
			</Grid>
			{activeStep === 1 ? <Address /> : activeStep === 2 ? <ConfirmOrder /> : <ProductInfo id={selectedProduct?.id} />}
			<Grid size={{ xs: 12 }} display='flex' justifyContent='center'>
				<Box className=''>
					<Button
						color='inherit'
						// disabled={activeStep === 0}
						onClick={handleBack}>
						Back
					</Button>
					<Button onClick={() => handleNext()} variant='contained' className='nextBtn'>
						{activeStep === 2 ? 'Place Order' : 'Next'}
					</Button>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Order;
