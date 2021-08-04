import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Loadable, Alert, AddClases } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { DASH_ROUTES } from '../constants/navigation';
import { getCourseEditAction } from '../state/courses/actions';

const CoursesForm = lazy(() => import('../components/Forms/CoursesForm'));

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
}));

const CourseEdit = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const { error, courseEdit } = useSelector(state => state.courses);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const goBack = () => {
		history.push(DASH_ROUTES.COURSES);
		dispatch(getCourseEditAction(null));
	};

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Tabs
					value={value}
					onChange={handleChange}
					centered
					aria-label='simple tabs example'>
					<Tab label='Detalles del curso' {...a11yProps(0)} />
					<Tab label='Clases' {...a11yProps(1)} />
					<Tab label='Capitulos' {...a11yProps(2)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<Suspense fallback={<Loadable />}>
					<CoursesForm
						title='Edición del curso'
						action='edit'
						initialData={courseEdit}
						secondAction={goBack}
					/>
				</Suspense>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<AddClases>

				</AddClases>
			</TabPanel>
			{error && (
				<Alert
					isOpen={true}
					message='Ocurrio un error y no se completo la solicitud'
				/>
			)}
		</div>
	);
};

export default CourseEdit;
