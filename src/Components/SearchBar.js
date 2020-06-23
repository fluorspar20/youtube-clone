import React from 'react'

import { Paper,TextField} from '@material-ui/core'

class SearchBar extends React.Component{

    state={
        searchTerm: ''
    }

    handleChange = (event) => {

        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        const {searchTerm} = this.state
        const {onFormSubmit} = this.props

        onFormSubmit(searchTerm)
        event.preventDefault()
    }

    render(){
        return(
            <Paper elevation={0} style={{padding: '25px'}}>
                <img src="/assets/yt-logo.jpg" style={{marginRight: 'auto', marginLeft: 'auto'}} height="70" alt="logo" />
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth
                        variant="outlined"
                        className="search" 
                        label="Search..."  
                        onChange= {this.handleChange}
                    />
                </form>
            </Paper>
        )
    }
}

export default SearchBar