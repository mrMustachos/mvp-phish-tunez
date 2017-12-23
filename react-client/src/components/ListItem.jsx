import React from 'react';

const ListItem = (props) => (
  <div>
  	<span className="ply_btn" ref={props.track.mps}>></span>
  	<span className="track_num">{props.track.position}</span>
  	<span className="track_name">{props.track.title}</span>
  	<span className="set">{props.track.set}</span>
  </div>
)

export default ListItem;


    // { props.track.title }


// duration: 872359
// id: 24253
// likes_count: 0
// mp3: "https://phish.in/audio/000/024/253/24253.mp3"
// position: 11
// set: "2"
// set_name: "Set 2"
// slug: "rock-and-roll"
// song_ids: [633]
// title: "Rock and Roll"
// updated_at: "2013-03-30T04:52:07Z"