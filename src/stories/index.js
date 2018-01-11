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
const SequenceMobileTableBody = (transaction) => {
  const {
    date, type, status,
  } = transaction

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

/**
 * Takes a transaction object & the name of the key inside that object that
 * has the nested data, and renders a tbody with additional rows displaying
 * nested data
 * 
 * @param {obj} transaction 
 * @param {str} nestedKey - name of the key that has the nested data
 */
const SequenceMobileTableBodyNested = (transaction, nestedKey) => {
  return null
}


storiesOf('Sequence Table/Mobile', module)
  .add('ACATS Mobile - Transaction (tbody)', () => {
    return SequenceMobileTableBody(acatsTestSequence[0])
  })

  .add('ACATS Mobile - Transaction w/Holdings (tbody w/nested data)', () => {
    return SequenceMobileTableBodyNested(acatsTestSequence[1], 'holdings')
  })


storiesOf('Sequence Table/Desktop', module)
  .add('ACATS Desktop - Transaction (tbody)', () => {
    return SequenceTableBody(acatsTestSequence[1])
  })
