import React, { useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

function Alert(props) {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
}

export default function CustomSnackbar({ vertical, horizontal, ...props }) {
	const [open, setOpen] = React.useState(false);

	useEffect(() => {
		setOpen(props.isOpen);
	}, [props.isOpen]);

	return (
		<Snackbar
			{...props}
			autoHideDuration={5000}
			anchorOrigin={{ vertical, horizontal }}
			open={open}
			onClose={() => setOpen(false)}
			key={vertical + horizontal}>
			<Alert severity={props.severity}>{props.message}</Alert>
		</Snackbar>
	);
}

CustomSnackbar.propTypes = {
	vertical: PropTypes.string,
	horizontal: PropTypes.string,
	message: PropTypes.string.isRequired,
};

CustomSnackbar.defaultProps = {
	vertical: 'bottom',
	horizontal: 'right',
	severity: 'error',
};
