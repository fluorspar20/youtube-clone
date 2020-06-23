import axios from 'axios'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyD-AYYRO7bM9eZ1eDaS1OL7KE8K5Aa45Cw'
    }
})