import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
	Button,
	Dialog,
	ChaptersPanel,
	Typography,
	LessonsForm,
} from '../components';
import Box from '@material-ui/core/Box';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCourseDetailAction } from '../state/courses/actions';
import { getLessonsAction } from '../state/lessons/actions';
import Loading from '../components/Loadable/Loading';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
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
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		display: 'flex',
		height: '65vh',
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
	},
	buttonMargin: {
		margin: theme.spacing(2, 0),
	},
}));

export default function CourseEdit() {
	const classes = useStyles();
	const { id } = useParams();
	const dispatch = useDispatch();
	const [value, setValue] = useState(0);
	const [open, setOpen] = useState(false);
	const { loading, courseEdit } = useSelector(state => state.courses);
	const { lessons } = useSelector(state => state.lessons);

	const getLessons = id => dispatch(getLessonsAction(id));

	useEffect(() => {
		const getCourse = id => dispatch(getCourseDetailAction(id));
		getCourse(id);
	}, []);

	useEffect(() => {
		if (courseEdit) {
			getLessons(courseEdit.id);
		}
	}, [courseEdit]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const renderTabs = () => {
		return lessons.map((lesson, index) => (
			<Tab key={index} label={lesson.titulo} {...a11yProps(index)} />
		));
	};

	const renderPanelTabs = () => {
		return lessons.map((lesson, index) => (
			<TabPanel value={value} index={index}>
				<ChaptersPanel lesson={lesson} />
			</TabPanel>
		));
		
	};

	const showLessonsForm = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	if (loading && !courseEdit) return <Loading />;

	return (
		<Fragment>
			<Typography variant='h6' align='center' gutterBottom>
				Edicion de las clases del curso de {courseEdit?.titulo}
			</Typography>

			<Button
				color='primary'
				onClick={showLessonsForm}
				className={classes.buttonMargin}>
				Agregar clase
			</Button>
			<Dialog isOpen={open} onClose={handleClose}>
				<LessonsForm
					title='Agrega una nueva clase'
					secondAction={handleClose}
					courseId={id}
				/>
			</Dialog>
			{lessons.length > 0 && (
				<div className={classes.root}>
					<Tabs
						orientation='vertical'
						variant='scrollable'
						value={value}
						onChange={handleChange}
						aria-label='Vertical tabs example'
						className={classes.tabs}>
						{renderTabs()}
					</Tabs>
					{renderPanelTabs()}
				</div>
			)}
		</Fragment>
	);
}
