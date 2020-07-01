import React from 'react';
import FilterView from './FilterView';

class FilterContainer extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			values: {
				opened: false,
				closed: false,
				labels: []
			}
		}
	}

	componentDidMount() {
		this.fetchLabels()
	}

	fetchLabels = () => {
		const { values: stateValues } = this.state;

		fetch('https://api.github.com/repos/angular/angular/labels').then(response => response.json()).then(labels => {
			this.setState({ values: { ...stateValues, labels } });
		})
	}

	render() {
		const { values } = this.state;
		return <FilterView values={values}></FilterView>
	}
}

export default FilterContainer;