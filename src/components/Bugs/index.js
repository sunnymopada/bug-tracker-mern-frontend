import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadBugs, resolveABug } from '../../store/bugs'

import './index.css'

class Bugs extends Component {
  componentDidMount() {
    this.props.loadBugs()
  }

  onClickResolveBug = (bugId) => {
    this.props.resolveABug(bugId)
  }

  renderBug = (bug) => {
    return (
      <div className='bug-item' key={bug.id}>
        <li>{bug.description}</li>
        <button
          disabled={bug.resolved}
          className='resolve-bug-button'
          onClick={() => {
            this.onClickResolveBug(bug.id)
          }}
        >
          Resolve
        </button>
      </div>
    )
  }

  render() {
    return (
      <ul>
        {this.props.bugs.map((bug) => {
          return this.renderBug(bug)
        })}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bugs: state.entities.bugs.list,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadBugs: () => dispatch(loadBugs()),
    resolveABug: (id) => dispatch(resolveABug(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bugs)
