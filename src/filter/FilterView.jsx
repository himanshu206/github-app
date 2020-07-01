import React from 'react';
import './FilterView.css';

const FilterView = ({ values, onChange }) => {
	const { open, closed, labels } = values;

	return <div className='filter-view'>
		<div className='view__item'>Open</div>
		<div className='view__item'>Closed</div>
		<div className='view__item'><select onChange={onChange}>
			<option value='-- Select --'></option>
			{labels.map(label => {
				return <option value={label.id}>{label.name}</option>
			})}
		</select></div>
	</div>
}

export default FilterView;