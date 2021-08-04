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

const ChaptersPanel = ({ lesson }) => {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const [isEdition, setEdition] = useState(false);
	const { chapters, error, loading, chapterEdit } = useSelector(
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
