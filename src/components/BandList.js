import React, { Component } from 'react'

export default class BandList extends Component {

    render() {
        const bands = this.props.bands.map(band => <li key={band.name }>{band.name}</li>)
        return(
            <ul>{bands}</ul>
        )
    }
}

