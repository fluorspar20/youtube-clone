import React from 'react';
import './App.css';

import {Grid} from '@material-ui/core'
import SearchBar from './Components/SearchBar'
import VideoList from './Components/VideoList'
import VideoDetail from './Components/VideoDetail'

import youtube from './api/youtube'

class App extends React.Component{

  state={
    videos: [],
    selectedVideo: null
  }

  componentDidMount(){
    this.handleSubmit('')
  }


  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    })
  }

  handleSubmit = async (searchTerm) => {
    
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyD-AYYRO7bM9eZ1eDaS1OL7KE8K5Aa45Cw',
        q: searchTerm
    }
    })

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  } 

  render(){
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={12} sm={8}>
              <VideoDetail video={this.state.selectedVideo} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default App;
