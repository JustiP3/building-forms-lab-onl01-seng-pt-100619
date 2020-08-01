
import React, { Component } from 'react'

class BandInput extends Component {
  state={name:""}
  render() {
    const handleChange = event => {
      this.setState({name: event.target.value})      
    }
    const handleSubmit = event => {
      event.preventDefault()
      this.props.addBand(this.state)
      this.setState({name:""})
    }
    return(
      <div>
        <form onSubmit={handleSubmit} >
          Band Name: <input type="text" name="name" value={this.state.name} onChange={handleChange} />
          <input type="submit" value="submit" />
        </form>
        <p>state is {this.state.name}</p>
      </div>
    )
  }
}

export default BandInput
