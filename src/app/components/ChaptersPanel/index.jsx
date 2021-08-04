import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	deleteChapterAction,
	getChapterEditAction,
	getChaptersAction,
} from '../../state/chapters/actions';
import Dialog from '../Dialog';
import ChapterForm from '../Forms/ChapterForm';
import Table from '../Table';
import Link from '../Link';
import { DASH_ROUTES } from '../../constants/navigation';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	link: {
		textDecoration: 'none',
		color: theme.palette.primary.dark,
	},
}));

const ChaptersPanel = ({ lesson }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const [isEdition, setEdition] = useState(false);
	const { chapters, loading, chapterEdit } = useSelector(
		state => state.chapters
	);

	useEffect(() => {
		const getChapters = id => dispatch(getChaptersAction(id));
		getChapters(lesson.id);
	}, []);

	const editChapter = course => {
		dispatch(getChapterEditAction(course.row));
		setEdition(true);
		handleClickOpen();
	};

	const deleteLesson = id => dispatch(deleteChapterAction(id));

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setEdition(false);
	};

	const columns = [
		{
			field: 'titulo',
			headerName: 'Titulo',
			width: 250,
		},
		{
			field: 'descripcion',
			headerName: 'Descripción',
			width: 300,
		},
		{
			field: 'urlVideo',
			headerName: 'Video',
			width: 300,
		},
		{
			field: 'students',
			headerName: 'Estudiantes',
			sortable: false,
			width: 140,
			disableClickEventBubbling: true,
			renderCell: params => {
				return (
					<Link
						to={`${DASH_ROUTES.STUDENTS}/chapter/${params.id}`}
						className={classes.link}>
						Ver alumnos
					</Link>
				);
			},
		},
		{
			field: 'announcements',
			headerName: 'Anuncios',
			sortable: false,
			width: 140,
			disableClickEventBubbling: true,
			renderCell: params => {
				return (
					<Link
						to={`${DASH_ROUTES.ANNOUNCEMENTS}/chapter/${params.id}`}
						className={classes.link}>
						Ver anuncios
					</Link>
				);
			},
		},
	];
	return (
		<Fragment>
			<Table
				mainLoading={loading}
				dataType='Capitulo'
				onClick={handleClickOpen}
				rows={chapters}
				columns={columns}
				editAction={editChapter}
				deleteAction={deleteLesson}
				emptyText='Esta clase no cuenta con capitulos, agrega uno para comenzar.'
			/>
			<Dialog isOpen={open} onClose={handleClose}>
				<ChapterForm
					initialData={isEdition ? chapterEdit : null}
					title={isEdition ? 'Editar capitulo' : 'Agregar capitulo'}
					secondAction={handleClose}
					isEdition={isEdition}
					classId={lesson.id}
				/>
			</Dialog>
		</Fragment>
	);
};

export default ChaptersPanel;
