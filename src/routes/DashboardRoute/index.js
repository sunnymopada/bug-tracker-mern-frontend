import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadBugs, resolveABug, assignABugUser } from '../../store/bugs'

import BugsList from '../../components/BugsList'

import { DashboardContainer } from './styledComponents'

class DashboardRoute extends Component {
   componentDidMount() {
      this.props.loadBugs()
   }

   render() {
      const { bugs, resolveABug, assignABugUser } = this.props
      return (
         <DashboardContainer>
            <BugsList
               bugs={bugs}
               onResolveBug={resolveABug}
               onAssignABugUser={assignABugUser}
            />
         </DashboardContainer>
      )
   }
}

const mapStateToProps = state => {
   return {
      bugs: state.entities.bugs.list
   }
}

const mapDispatchToProps = dispatch => {
   return {
      loadBugs: () => dispatch(loadBugs()),
      resolveABug: id => dispatch(resolveABug(id)),
      assignABugUser: (id, userId) => {
         dispatch(assignABugUser(id, userId))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardRoute)
