import React from 'react'
import {Grid} from '@material-ui/core'
import VideoItem from './VideoItem'

const VideoList = ({videos,onVideoSelect}) => {
    if(videos!=null){
        const listOfVideos=videos.map((video,id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />)
        return(
            <Grid container spacing={4}>
                <Grid item>
                    <p style={{fontSize: '20px' ,color: 'red' , textShadow: '1px 1px black'}} >Other Recommendations: </p>
                </Grid>
                {listOfVideos}
            </Grid>
        )
    }
    else   
        return( <div></div>)
}

export default VideoList