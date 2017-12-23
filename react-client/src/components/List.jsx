import React from 'react';
import ListItem from './ListItem.jsx';

class List extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// console.log(this.props.changeTrack)
		return (
			<div className="grid">
				<hr/>
				<div className="show_info">
					<h3 className="venue">{ this.props.venue.name }</h3>
					<h4 className="location">{ this.props.venue.location }</h4>
					<p className="date">{ this.props.date }</p>
				</div>
				{ this.props.tracks.map((track, index) => {
						return (
							<ListItem
								key={ index }
								index={ index }
								track={ track }
								changeTrack={this.props.changeTrack}
							/>
						)
					})
				}
			</div>

		)
	}
}

export default List;
