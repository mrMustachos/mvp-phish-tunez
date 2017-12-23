import React from 'react';
import ListItem from './ListItem.jsx';

// const List = (props) => (
// 	<div>
// 		{console.log('from List: ', props)}
// 		<h4>List Component</h4>
// 		There are { props.items.length } items.
// 		{ props.items.map((item, index) => <ListItem item={item} key={index}/>)}
// 	</div>
// )




class List extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// console.log(this.props.changeTrack)
		return (
			<div>
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
			



			// <li className="menu-fish">
			// 	<img src={ details.image } alt={ details.name } />
			// 	<h3 className="fish-name">
			// 		{ details.name }
			// 		<span className="price">{ formatPrice(details.price) }</span>
			// 	</h3>
			// 	<p>{ details.desc }</p>
			// 	<button
			// 		onClick={ () => this.props.addToOrder(index) }
			// 		disabled={ !isAvailable }
			// 	>{ buttonText }</button>
			// </li>