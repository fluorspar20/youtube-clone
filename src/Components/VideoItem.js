import React from 'react'

import {Grid, Paper, Typography} from '@material-ui/core'

const VideoItem = ({video,onVideoSelect}) => {
    return(
        <Grid item xs={12} style={{margin: '0px'}} >
            <Paper style={{display : 'flex', alignItems: 'center', cursor: 'pointer', borderBottom: '1px solid gray'}} onClick={() => onVideoSelect(video)} >
                <img style={{marginRight: '20px',minWidth: '200px', minHeight: '100px', objectFit: 'cover',maxWidth: '200px' }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
                <Grid>
                <Typography variant="body2"><strong> {video.snippet.title} </strong></Typography>
                <Typography variant="subtitle2" style={{ color: 'grey' }} > {video.snippet.channelTitle}</Typography>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default VideoItem