import React from 'react';
import IssueRowView from './IssueRowView';

import './IssueListView.css';

const IssueListView = ({ issueList }) => {

	return <div className='issue-list-view'>
		{issueList.map(issue => {
			return <IssueRowView issue={issue}></IssueRowView>
		})}
	</div>
}

export default IssueListView;