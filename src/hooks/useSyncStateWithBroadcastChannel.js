import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProductCategory } from '../store/reducers/filterSlice';

const useSyncStateWithBroadcastChannel = (channelName) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const channel = new BroadcastChannel(channelName);

		// Listen for category change messages from other tabs
		channel.onmessage = (event) => {
			if (event.data?.category) {
				setProductCategory(event.data.category);
				dispatch(setProductCategory(event.data.category));
			}
		};

		return () => {
			// Clean up and close the channel when component unmounts
			channel.close();
		};
	}, [dispatch, channelName]);

	return (newCategory) => {
		const channel = new BroadcastChannel(channelName);
		channel.postMessage({ category: newCategory });
		channel.close();
	};
};

export default useSyncStateWithBroadcastChannel;
