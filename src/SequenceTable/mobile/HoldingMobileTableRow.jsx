/**
 * Represents a holding in a sequenceable or transaction that has them, e.g. a
 * buy or sell order.
 * @mobile
 * 
 */

import * as React from 'react'

const HoldingMobileTableRow = (props) => {
  const { symbol, shareQuantity } = props.holding

  return (
    <tr>
      <td>
        <p>{symbol}</p>
        <p>Share</p>
        <p>{shareQuantity}</p>
      </td>
    </tr>
  ) 
}

export default HoldingMobileTableRow