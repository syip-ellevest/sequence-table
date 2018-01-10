/**
 * Represents a sequence in tabular form.
 * @props {array} data - array of objects that should map to a table row
 */

import * as React from 'react'
import './SequenceTable.css'

/**
 * An array of objects that represent the table columns.
 * Order of columns in the array is the order in which they will be presented
 * in the table.
 * 
 */
const tableColumns = [
  {
    key: 'animal',
    title: 'Animal', 
  },
  {
    key: 'collective_noun',
    title: 'Collective Noun',
  },
]

/**
 * 
 * @param {array} columns - array of column objects to be represented in this
 * table.
 * Sample column object:
    {
      key: string representing the key in the table data,
      title: display title for this column
    }
 */
const renderHeaderCells = (columns) => {
  return columns.map(column => <th key={column.key}>{column.title}</th>)
}

const renderBodyCell = cellData => {
  console.log(cellData)
  return <td>{cellData}</td>
}

const renderBodyRows = (data, columns) => {
  return data.map((row) => {
    return <tr>{columns.map(column => renderBodyCell(row[column.key]))}</tr>
  })
}

const SequenceTable = (props) => {
  const rows = renderBodyRows(props.data, tableColumns)

  return (
    <table>
      <thead>
        <tr>
          {renderHeaderCells(tableColumns)}
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export default SequenceTable