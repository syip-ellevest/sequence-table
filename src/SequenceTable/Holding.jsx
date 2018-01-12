/**
 * Renders information for a holding in a transaction object or sequencable
 * that contains one, e.g. a Buy or Sell order.
 * 
 */
import * as React from 'react'

const Holding = (props) => {
  const {
    symbol,
    shareQuantity,
  } = props.holding
  
  return (
    <div>
      <p>{symbol}</p>
      <p>Share</p>
      <p>{shareQuantity}</p>
    </div>
  )
}

// Proptypes: symbol (str), share (str)
// default props: isMobile false 

export default Holding