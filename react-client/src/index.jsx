import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios'
import List from './components/List.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			items: {},
      loaded: false
		}
	}

	componentWillMount() {
		this.fetchSet();

		// $.ajax({
		//	 url: '/items', 
		//	 success: (data) => {
		//		 this.setState({
		//			 items: data
		//		 })
		//	 },
		//	 error: (err) => {
		//		 console.log('err', err);
		//	 }
		// });
	}

  fetchSet() {
    axios.get('http://phish.in/api/v1/random-show')
    .then((response) => {
      // console.log(response.data)
      this.setState({
        items: response.data.data,
        loaded: true
      })
    })
    .catch((err) => {
      console.error('random-show through an error!\n', err);
    });
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
          />
        </div>
      ) : (null)
    )
	}
}

ReactDOM.render(<App />, document.getElementById('app'));