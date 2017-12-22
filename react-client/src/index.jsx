import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    this.fetchTracks();
  }

  fetchTracks() {
    axios.get('/items')
    .then((data) => {
      this.setState({ items: data });
    })
    .catch((error) => {
      console.error('fetchTracks through an error!\n', error);
    });
  }

  render () {
    return (<div>
      <h1>Item List</h1>
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));