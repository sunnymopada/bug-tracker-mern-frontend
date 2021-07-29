import React, { Component } from 'react'
import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap'

import { ResolveButton } from './styledComponents'

class BugItem extends Component {
   renderResolveBug = () => {
      const { bug, onResolveBug } = this.props
      const { resolved, id } = bug
      return (
         <ResolveButton
            disabled={resolved}
            onClick={() => {
               onResolveBug(id)
            }}
         >
            Resolve
         </ResolveButton>
      )
   }

   isActiveAssignee = assigneeId => {
      const { bug } = this.props
      return assigneeId === bug.userId
   }

   renderChangeAssignee = () => {
      const { bug, onAssignABugUser } = this.props
      const { id, userId } = bug
      return (
         <DropdownButton
            as={ButtonGroup}
            id={`dropdown-variants-${id}`}
            variant={'secondary'}
            title={userId ? userId : '-1'}
            onSelect={eventKey => {
               onAssignABugUser(id, eventKey)
            }}
         >
            <Dropdown.Item eventKey='1' active={this.isActiveAssignee(1)}>
               1
            </Dropdown.Item>
            <Dropdown.Item eventKey='2' active={this.isActiveAssignee(2)}>
               2
            </Dropdown.Item>
            <Dropdown.Item eventKey='3' active={this.isActiveAssignee(3)}>
               3
            </Dropdown.Item>
            <Dropdown.Item eventKey='4' active={this.isActiveAssignee(4)}>
               4
            </Dropdown.Item>
         </DropdownButton>
      )
   }

   render() {
      const { bug } = this.props
      const { id, description } = bug
      return (
         <>
            <tr key={id}>
               <td>{id}</td>
               <td>{description}</td>
               <td>{this.renderChangeAssignee()}</td>
               <td>{this.renderResolveBug()}</td>
            </tr>
         </>
      )
   }
}

export default BugItem
