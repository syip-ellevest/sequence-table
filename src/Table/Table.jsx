/**
 * Represents data in tabular form.
 * 
 * @props {array} data - array of objects that should map to a table row
 */

import * as React from 'react'
import PropTypes from 'prop-types'
import './Table.css'

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
  return columns.map(column => 
    <th key={column.key}>{column.title}</th>
  )
}

const renderBodyCell = cellData => {
  return <td>{cellData}</td>
}

const renderBodyRows = (data, columns) => {
  return data.map((row) => {
    return <tr>{columns.map(column => renderBodyCell(row[column.key]))}</tr>
  })
}

/**
 * Generates a column array from the keys of the first object in tableData.
 * Note that this only works if all objects (rows) in your tableData array
 * are the same, or if you intend for only the keys of the first object to 
 * be used as the column names.
 * 
 * The order in which the keys appear in that object are the order in which the
 * columns will be arranged in the table.
 *  
 * @param {array} tableData 
 * 
 */
const generateColumns = (tableData) => {
  return Object.keys(tableData[0]).map((key) => {
    return {
      key,
      title: key,
    }
  })
}

/**
 * @TODO:
 * - Separate Header, Body components
 */
const Table = (props) => {
  /**
   * If a columns object is not provided, auto-generate from table data.
   * Note that generateColumns assumes that each object in the table data is 
   * the same, and simply uses the keys from the first object in table data.
   */
  const columns = props.columns || generateColumns(props.data)
  const rows = renderBodyRows(props.data, columns)

  return (
    <table>
      <thead>
        <tr>
          {renderHeaderCells(columns)}
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

Table.defaultProps = {
  columns: undefined,
}

export default Table 