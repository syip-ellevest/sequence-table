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
import SequenceRecord from './SequenceRecord'
import Holding from './Holding'

const SequenceTable = (props) => {

  const renderTableBody = (record) => {
    return (
      <tbody>
        <tr>
          <SequenceRecord record={record}>
            { // Render holdings if available as nested rows
              record.holdings
              && record.holdings.map((holding) => {
                return <Holding holding={holding} />
              })   
            }
          </SequenceRecord>
        </tr>
      </tbody>
    )
  }

  const tableBodies = props.sequence.map(
    record => renderTableBody(record)
  )

  return (
    <table>
      {tableBodies}
    </table>
  )
}

export default SequenceTable