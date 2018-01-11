/**
 * Represents a transaction sequence in a tabular format. 
 * Each record in the sequence is represented as a table body
 * (<tbody>), which is a group of table rows (<trs>).
 * 
 * To better understand the backend system that this view is representing, see 
 * docs on Transaction Sequences:
 * https://ellevest.atlassian.net/wiki/spaces/ENG/pages/62394411/Transaction+Sequences
 * https://github.com/Ellevest/transaction_system
 * 
 * @param {array} sequence - array of record objects; a record is a "step" in
 * the sequence. 
 * 
 */

import * as React from 'react'
import SequenceMobileTableBody from './mobile/SequenceMobileTableBody'
import HoldingMobileTableRow from './mobile/HoldingMobileTableRow'

const SequenceTable = (props) => {
  const renderTableBodies = (record) => {
    return (
      <SequenceMobileTableBody record={record}>
        { // Render holdings if available as nested rows
          record.holdings
          && record.holdings.map((holding) => {
            return <HoldingMobileTableRow holding={holding} />
          })   
        }
      </SequenceMobileTableBody>
    )
  }

  const tableBodies = props.sequence.map(
    record => renderTableBodies(record)
  )

  return (
    <table>
      {tableBodies}
    </table>
  )
}

export default SequenceTable