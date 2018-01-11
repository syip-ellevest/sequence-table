import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Table from '../Table/Table'
import genericTestData from '../testData/generic-data'
import sequenceTestData from '../testData/acats-sequence'
import acatsTestSequence from '../testData/acats-sequence';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Table', module)
  .add('With default columns', () => <Table data={genericTestData.animals} />)
  .add('With defined & customized columns', () => {
    const definedColumns = [
      {
        key: 'en',
        title: 'In English',
      },
      {
        key: 'fr',
        title: 'En Français',
      },
      {
        key: 'number',
        title: 'Number',
      },
    ]
    
    return (
      <Table 
        columns={definedColumns}
        data={genericTestData.numbers} />
    )
  })

/**
 * Takes one transaction object & renders into a <tbody> for mobile 
 * Ignores nested holdings
 * @mobile
 * 
 * @param {obj} transaction 
 */
const SequenceMobileTableBody = (transaction, nestedKey = null) => {
  const {
    date, type, status,
  } = transaction

  // @TODO: if nestedKey, render bodies for them too

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
    </tbody>
  )
}


/**
 * Takes a transaction object & the name of the key inside that object that
 * has the nested data, and renders a tbody with additional rows displaying
 * nested data
 * 
 * @param {obj} transaction 
 * @param {str} nestedKey - name of the key that has the nested data
 */
const SequenceMobileTableBodyNested = (transaction, nestedKey) => {
  const holdings = transaction[nestedKey].map((holding) => {
    return HoldingMobileTableRow(holding)
  })  

  return [
    SequenceMobileTableBody(transaction),
    holdings,
  ]
}

const HoldingMobileTableRow = (holding) => {
  const { symbol, shareQuantity } = holding

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

const SequenceTable = (sequence) => {
  const renderRows = (row) => {
    if (row.holdings) {
      return SequenceMobileTableBodyNested(row, 'holdings')
    } else {
      return SequenceMobileTableBody(row)
    }
  }

  const rows = sequence.map(row => renderRows(row))

  return (
    <table>
      {rows}
    </table>
  )
}


storiesOf('Sequence Table/Mobile', module)
  .add('Sequence Table', () => {
    return SequenceTable(acatsTestSequence)
  })

  .add('Transaction with no holdings - Table Body', () => {
    return SequenceMobileTableBody(acatsTestSequence[0])
  })

  .add('Transaction w/Holdings - Table Body', () => {
    return SequenceMobileTableBodyNested(acatsTestSequence[1], 'holdings')
  }) 

  .add('Holding - Table Body', () => {
    return HoldingMobileTableBody(acatsTestSequence[1].holdings[0])
  })





// SequenceTable Desktop
/**
 * Takes one transaction object & renders into a <tbody> 
 * Ignores nested holdings
 * @desktop
 * 
 * @param {obj} transaction 
 */
const SequenceTableBody = (transaction) => {
  const {
    date, type, status,
  } = transaction

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
    </tbody>
  )
}

storiesOf('Sequence Table/Desktop', module)
  .add('ACATS Desktop - Transaction (tbody)', () => {
    return SequenceTableBody(acatsTestSequence[1])
  })
