import React from 'react'

import {Paper,Typography} from '@material-ui/core'

const VideoDetail = ({video}) => {
    if(video!=null){

        console.log(video)
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

        return(
            <>
                <Paper elevation={6} style={{height: '70%'}}>
                    <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc} />
                </Paper>
                <Paper elevation={6} style={{padding: '15px'}}>
                    <Typography variant="h6" > {video.snippet.title} - {video.snippet.channelTitle}  </Typography>
                    <Typography variant="subtitle1" > {video.snippet.channelTitle} </Typography>
                    <Typography variant="subtitle2" > {video.snippet.description} </Typography>
                    <br />
                    <Typography variant="subtitle2" > {new Date(video.snippet.publishTime).toLocaleDateString('default', {month: 'long', day: 'numeric', year: 'numeric'})} </Typography>
                </Paper>
            </>
        )
    }

    else
        return (
            <p style={{textAlign: 'center'}}>
            <img src="/assets/loading.gif" alt="loading..." style={{marginLeft: 'auto', marginRight: 'auto'}} />
            </p>
        )
}

export default VideoDetail