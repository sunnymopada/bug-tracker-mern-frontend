import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadBugs, getUnresolvedBugs, resolveABug } from '../../store/bugs'

import './index.css'

const BugsList = () => {
   const dispatch = useDispatch()
   const bugs = useSelector(getUnresolvedBugs)
   useEffect(() => {
      dispatch(loadBugs())
   }, [])

   const onClickResolveBug = bugId => {
      dispatch(resolveABug(bugId))
   }

   const renderBug = bug => {
      return (
         <div className='bug-item' key={bug.id}>
            <li>{bug.description}</li>
            <button
               disabled={bug.resolved}
               className='resolve-bug-button'
               onClick={() => {
                  onClickResolveBug(bug.id)
               }}
            >
               Resolve
            </button>
         </div>
      )
   }

   return (
      <ul>
         {bugs.map(bug => {
            return renderBug(bug)
         })}
      </ul>
   )
}

export default BugsList
