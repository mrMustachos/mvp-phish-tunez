import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import axios from 'axios'
import List from './components/List.jsx';
// import List from './components/AudioPlayer.jsx';
import AudioPlayer from 'react-responsive-audio-player';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			items: {},
      playlist: [],
      loaded: false
      // playlist: [{ url: 'https://phish.in/audio/000/024/253/24253.mp3', displayText: 'Rock and Roll' }, { url: 'https://phish.in/audio/000/010/735/10735.mp3', displayText: 'The Lizards' }]
		}
    this.changeTrack = this.changeTrack.bind(this);
	}

	componentWillMount() {
		this.fetchSet();
		// $.ajax({
		// 	 url: '/items', 
		// 	 success: (data) => {
		// 		 this.setState({
		// 			 items: data
		// 		 })
		// 	 },
		// 	 error: (err) => {
		// 		 console.log('err', err);
		// 	 }
		// });
	}

  fetchSet() {
    axios.get('http://phish.in/api/v1/random-show')
    .then((response) => {
      // console.log(response.data.data)
      this.setState({
        items: response.data.data,
        loaded: true
      })
    })
    .catch((err) => {
      console.error('random-show through an error!\n', err);
    })
    .then((list) => {
      let obj = this.state.items.tracks;
      let playlist = [];

      obj.forEach(trackDeets => {
        let track = {};
        track.url = trackDeets.mp3;
        track.displayText = trackDeets.title;
        playlist.push(track);
      })
      this.setState({
        playlist: playlist
      })
    });
  }

  changeTrack(idx) {
    const newPlayList = this.state.playlist.slice(idx);
    // console.log(newPlayList)
    this.setState({
      playlist: newPlayList
    })
  }

	render () {
		return (
      this.state.loaded ? (
        <div>
          <h1>Your Random Set Dawg!</h1>
          <List
            tracks={ this.state.items.tracks }
            date={ this.state.items.date }
            venue={ this.state.items.venue }
            changeTrack={this.changeTrack}
          />
          <AudioPlayer
            playlist={ this.state.playlist }
            hideBackSkip={ false }
            hideForwardSkip={ false }
            autoplay={ false }
            onMediaEvent={{
              ended: () => console.log('hi')
            }}
          />
        </div>
      ) : (null)
    )
	}
}

ReactDOM.render(<App />, document.getElementById('app'));