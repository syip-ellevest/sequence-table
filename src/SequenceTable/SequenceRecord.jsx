/**
 * Renders a sequence record. 
 * @param {obj} record 
 * 
 */
import * as React from 'react'

const SequenceRecord = (props) => {
  const {
    date, 
    type, 
    status,
  } = props.record

  return (
    <div>
      <p>{date}</p>
      <p>{type}</p>
      <p>{status}</p>
      {props.children}
    </div>
  )
}

export default SequenceRecord