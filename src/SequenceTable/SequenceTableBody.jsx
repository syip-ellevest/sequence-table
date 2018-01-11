/**
 * Takes one transaction object & renders into a <tbody> 
 * @desktop
 * 
 * @param {obj} record 
 */
import * as React from 'react'

const SequenceTableBody = (props) => {
  const {
    date, type, status,
  } = props.record

  return (
    <tbody>
      <tr>
        <td>
          <p>{date}</p>
        </td>
        <td>
          <p>{type}</p>
        </td>
        <td>
          <p>{status}</p>
        </td>
      </tr>
      {props.children}
    </tbody>
  )
}

export default SequenceTableBody