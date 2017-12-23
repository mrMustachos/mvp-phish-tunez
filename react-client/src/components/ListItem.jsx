import React from 'react';
// an on click that keeps track of the if the play is click and what the index is
class ListItem extends React.Component {
	constructor(props) {
		super(props);
	}
	// handleClick(e) {
	// 	console.log(e.target.index);
	// }
	render() {
		return (
			<div className="row" onClick={() => this.props.changeTrack(this.props.index)}>
		  	<span className="ply_btn col col-1-of-8" ref={this.props.track.mps}>></span>
		  	<span className="track_num col col col-1-of-8">{this.props.track.position}</span>
		  	<span className="track_name col col col-5-of-8">{this.props.track.title}</span>
		  	<span className="set col col col-1-of-8">{this.props.track.set}</span>
		  </div>
		)
	}
}

export default ListItem;



// const ListItem = (props) => (
// 	// getTrack(link) {
// 	// 	console.log(link)
// 	// }
//   <div>
//   	<span className="ply_btn" ref={props.track.mps} onClick={console.log('u clicked me')}>></span>
//   	<span className="track_num">{props.track.position}</span>
//   	<span className="track_name">{props.track.title}</span>
//   	<span className="set">{props.track.set}</span>
//   </div>
// )
