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
      loaded: false,
      count: 0
		}
    this.changeTrack = this.changeTrack.bind(this);
	}

	componentWillMount() {
		this.fetchSet();
	}

  fetchSet() {
    axios.get('//phish.in/api/v1/random-show')
    .then((response) => {
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
  trackCount() {
    this.setState({
      count: ++this.state.count
    }, () => {
      console.log(this.state.count);
      if (this.state.count === this.state.playlist.length - 1) {
        this.fetchSet();
      }
    })
  }

  changeTrack(idx) {
    const newPlayList = this.state.playlist.slice(idx);
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
              ended: () => this.trackCount()
            }}
          />
        </div>
      ) : (null)
    )
	}
}

ReactDOM.render(<App />, document.getElementById('app'));