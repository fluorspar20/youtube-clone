import React from 'react'
import {Grid} from '@material-ui/core'
import VideoItem from './VideoItem'

const VideoList = ({videos,onVideoSelect}) => {

    const listOfVideos=videos.map((video,id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />)
    return(
        <Grid container spacing={4}>
            <Grid item>
                <h3 style={{textShadow: '1px 2px grey'}} >Other Suggestions: </h3>
            </Grid>
            {listOfVideos}
        </Grid>
    )
}

export default VideoList