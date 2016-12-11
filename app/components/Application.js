// -- react
import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

class Application extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return(
      <h1>Bookmarks</h1>
    )
  }
}

function mapStateToProps(state) {
  const { bookmarks } = state
  return { bookmarks }
}

export default connect(mapStateToProps)(Application)
