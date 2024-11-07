import { toast } from 'sonner';
import CloseIcon from '@mui/icons-material/Close';

type ToastProps = {
	type?: 'success' | 'error' | 'info' | 'warning';
	message: string;
	options?: Object;
};

export const showToast = ({ type, message, options = {} }: ToastProps) => {
	const t = type === undefined ? toast : toast[type];

	t(message, {
		...options,
		action: {
			label: <CloseIcon fontSize='small' />,
			onClick: () => {}
		},
		actionButtonStyle: {
			backgroundColor: 'transparent',
			color: '#000',
			position: 'absolute',
			top: '5px',
			right: '5px',
			fontWeight: 'bold'
		}
	});
};
