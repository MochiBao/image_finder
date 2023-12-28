import React, { Component } from 'react'

export default class Pagination extends Component {
  render() {
    return (
      <button className='loadMore' onClick={this.props.plusPage}>Load more</button>
    )
  }
}



