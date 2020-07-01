import React from 'react';
import moment from 'moment';

import './IssueRowView.css';

const IssueRowView = ({ issue }) => {
	const { title, number, created_at, user: { login: username } } = issue;

	return <div className='issue-row-view'>
		<div className='issue-row-view__title'>
			{title}
		</div>
		<div className="issue-row-view__meta">
			<span>{`#${number}`}</span>
			<span>{moment(created_at).fromNow()}</span>
			<span>by {username}</span>
		</div>
	</div>
}

export default IssueRowView;