/**
 * Renders a sequence record as a table body.
 * @mobile
 * 
 * @param {obj} transaction 
 */

import * as React from 'react'

const SequenceMobileTableBody = (props) => {
  const {
    date, type, status,
  } = props.record

  return (
    <tbody>
      <tr>
        <td colspan="2"><p>{date}</p></td>
      </tr>
      <tr>
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

export default SequenceMobileTableBody