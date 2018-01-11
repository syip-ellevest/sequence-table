import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Table from '../Table/Table'
import genericTestData from '../testData/generic-data'
import acatsTestSequence from '../testData/acats-sequence'

import SequenceTable from '../SequenceTable/mobile/SequenceTable' 
import SequenceMobileTableBody from '../SequenceTable/mobile/SequenceMobileTableBody'
import HoldingMobileTableRow from '../SequenceTable/mobile/HoldingMobileTableRow'

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



storiesOf('Sequence Table/Mobile', module)
  .add('Sequence Table', () => {
    return <SequenceTable sequence={acatsTestSequence} />
  })

  .add('Transaction with no holdings - Table Body', () => {
    return <SequenceMobileTableBody record={acatsTestSequence[0]} />
  })

  .add('Transaction w/Holdings - Table Body', () => {
    return (
      <SequenceMobileTableBody 
        record={acatsTestSequence[1]}>
        {
          acatsTestSequence[1].holdings.map((holding) => {
            return <HoldingMobileTableRow holding={holding} />
          })   
        }
      </SequenceMobileTableBody>
    )
  }) 

  .add('Holding - Table Body', () => {
    return (
      <HoldingMobileTableRow
        holding={acatsTestSequence[1].holdings[0]} />
    )
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
