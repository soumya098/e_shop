import { Grid2 as Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllAddress, setSelectedAddress } from '../../store/reducers/addressSlice';
import Select from 'react-select';

export const groupStyles = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	backgroundColor: '#172B4D'
};

export const groupBadgeStyles = {
	backgroundColor: '#EBECF0',
	borderRadius: '2em',
	color: '#172B4D',
	display: 'inline-block',
	fontSize: 12,
	fontWeight: 'normal',
	lineHeight: '1',
	minWidth: 1,
	padding: '0.16666666666667em 0.5em',
	textAlign: 'center'
};

const Address = () => {
	const dispatch = useDispatch();
	const { allAddresses, isLoading, selectedAddress } = useSelector((state) => state.address);
	console.log(selectedAddress);

	useEffect(() => {
		dispatch(fetchAllAddress());
	}, [dispatch]);

	const handleChange = (data) => {
		dispatch(setSelectedAddress(data));
	};

	const addressOptions =
		allAddresses && allAddresses.map(({ id, name, street, city, state, zipcode }) => ({ value: id, label: `${name}, ${street}, ${city}, ${state}, ${zipcode}` }));

	const formatGroupLabel = (data) => (
		<div style={groupStyles}>
			<span>{data.label}</span>
			<span style={groupBadgeStyles}>{data.options.length}</span>
		</div>
	);

	return (
		<>
			<Grid container paddingBottom={2} justifyContent='center' marginTop={0}>
				<Grid size={{ xs: 10, md: 4 }}>
					<Select
						formatGroupLabel={formatGroupLabel}
						onChange={(data) => handleChange(data)}
						options={addressOptions}
						isClearable={true}
						getOptionLabel={(option) => option.label}
						getOptionValue={(option) => option.value}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default Address;
