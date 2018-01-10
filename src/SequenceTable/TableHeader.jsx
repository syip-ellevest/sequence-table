/**
 * Header for an table component.
 */

import * as React from 'react'

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
  return columns.map(column => <th>{column.title}</th> )
}

const TableHeader = (props) => {
  return (
    <thead>
      <tr>
        {renderHeaderCells(props.columns)}
      </tr>
    </thead>
  )
}

export default TableHeader