import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Typography } from '../components';
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
		height: '75vh',
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
	},
}));

export default function CourseEdit() {
	const classes = useStyles();
	const { id } = useParams();
	const dispatch = useDispatch();
	const [value, setValue] = useState(0);
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

	if (loading && !courseEdit) return <Loading />;

	return (
		<Fragment>
			<Typography variant='h6' align='center' gutterBottom>
				Edicion de las clases del curso de {courseEdit?.titulo}
			</Typography>

			{lessons.length === 0 ? (
				<Typography variant='subtitle'>
					Agrega lecciones a tu curso
				</Typography>
			) : (
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
					<TabPanel value={value} index={0}>
						Item One
					</TabPanel>
					<TabPanel value={value} index={1}>
						Item Two
					</TabPanel>
					<TabPanel value={value} index={2}>
						Item Three
					</TabPanel>
				</div>
			)}
		</Fragment>
	);
}
