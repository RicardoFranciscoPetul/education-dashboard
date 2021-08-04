import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../Buttons/common';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

const ContainedButtons = ({ isEdition, isLoading, secondAction, onlyRead }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			{!onlyRead && (
				<Button
					color='primary'
					variant='contained'
					type='submit'
					showLoad={true}
					disabled={isLoading}>
					{isEdition ? 'Actualizar' : 'Agregar'}
				</Button>
			)}
			<Button
				color='secondary'
				disabled={isLoading}
				onClick={secondAction}>
				{onlyRead ? 'Aceptar' : 'Cancelar'}
			</Button>
		</div>
	);
};

ContainedButtons.propTypes = {
	action: PropTypes.string,
};

ContainedButtons.defaultProps = {
	action: 'add',
};

export default ContainedButtons;
