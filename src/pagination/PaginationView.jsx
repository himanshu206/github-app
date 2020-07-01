import React from 'react';
import './PaginationView.css';

const PaginationView = ({ totalPages, page, onChange }) => {

	const handleOnNext = () => {
		if (page < totalPages) {
			onChange(page + 1);
		}
	}

	const handleOnBack = () => {
		if (page > 0) {
			onChange(page - 1);
		}
	}

	const getList = () => {
		return Array.from(Array(totalPages).keys()).map(value => value + 1).map(value => {
			return <li key={value} className={`list__item ${page === value ? 'selected' : ''}`} onClick={() => onChange(value)}>{value}</li>
		})
	}

	return <div className='pagination-view'>
		<ul className='pagination-view__list'>
			<li className='list__item' onClick={handleOnBack}>Back</li>
			{getList()}
			<li className='list__item' onClick={handleOnNext}>Next</li>
		</ul>
	</div>
}

export default PaginationView;