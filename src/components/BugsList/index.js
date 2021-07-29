import React, { Component } from 'react'

import BugItem from '../BugItem'

import { DashboardTable } from './styledComponents'

class BugsList extends Component {
   renderBugs = () => {
      const { bugs, onResolveBug, onAssignABugUser } = this.props
      return bugs.map(bug => {
         return (
            <BugItem
               key={bug.id}
               bug={bug}
               onResolveBug={onResolveBug}
               onAssignABugUser={onAssignABugUser}
            />
         )
      })
   }

   renderTableHeading = () => {
      return (
         <tr>
            <th>#</th>
            <th>Description</th>
            <th>Assignee</th>
            <th>Status</th>
         </tr>
      )
   }

   render() {
      return (
         <DashboardTable responsive striped bordered hover variant='dark'>
            <thead>{this.renderTableHeading()}</thead>
            <tbody>{this.renderBugs()}</tbody>
         </DashboardTable>
      )
   }
}

export default BugsList
