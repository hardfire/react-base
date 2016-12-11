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
    const bookmarkList = this.props.bookmarks.reduce((acc, bookmark) => {
      acc.push(<li key={bookmark.key}> <a href={bookmark.url}> {bookmark.title} </a> </li>)
      return acc
    }, [])
    return(
      <div>
        <h1>Bookmarks</h1>
        <ul> {bookmarkList} </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { bookmarks } = state
  return { bookmarks }
}

export default connect(mapStateToProps)(Application)
