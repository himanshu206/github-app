import React from 'react';
import FilterContainer from '../filter/FilterContainer';

import PaginationView from '../pagination/PaginationView';
import IssueListView from './IssueListView';

import './IssueContainer.css';

const getUrl = (owner, repo, page) => {
	return `https://api.github.com/repos/${owner}/${repo}/issues?per_page=10&page=${page}`;
}

const TOTAL_PAGES = 10;

class IssueContainer extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			issueList: [],
			page: 1
		}
	}

	componentDidMount() {
		const { page } = this.state;
		this.fetchIssues(page);
	}

	componentDidUpdate(prevProps, prevState) {
		const { page } = this.state;
		if (prevState.page !== page) {
			this.fetchIssues(page);
		}
	}

	fetchIssues = (page) => {
		const url = getUrl('angular', 'angular', page);

		fetch(url).then(response => response.json()).then(issueList => {
			this.setState({ issueList });
		});
	}

	handlePageChange = (page) => {
		this.setState({ page });
	}

	render() {
		const { issueList, page } = this.state;

		return <div className='issue-container'>
			<FilterContainer></FilterContainer>
			<IssueListView issueList={issueList}></IssueListView>
			<PaginationView totalPages={TOTAL_PAGES} page={page} onChange={this.handlePageChange}></PaginationView>
		</div>

	}
}

export default IssueContainer;