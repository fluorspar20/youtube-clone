import React from 'react';
import './App.css';

import {Grid} from '@material-ui/core'
import {SearchBar,VideoList, VideoDetail} from './Components'

import youtube from './api/youtube'

function App() {
  return (
    <Grid justify="center" container spacing={16}>
      <Grid item xs={11}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            { /*searchBar*/ }
          </Grid>
          <Grid item xs={8}>
            { /* video detail*/ }
          </Grid>
          <Grid item xs={4}>
            { /* video suggestions*/ }
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
