import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Table from '../Table/Table'
import genericTestData from '../testData/generic-data'
import acatsTestSequence from '../testData/acats-sequence'

import SequenceTable from '../SequenceTable/SequenceTable' 
import SequenceTableBody from '../SequenceTable/SequenceTableBody'
import SequenceMobileTableBody from '../SequenceTable/mobile/SequenceMobileTableBody'
import HoldingTableRow from '../SequenceTable/HoldingTableRow'
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

  .add('Record with no nested records', () => {
    return <SequenceMobileTableBody record={acatsTestSequence[0]} />
  })

  .add('Record w/nested records', () => {
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

  .add('Holding', () => {
    return (
      <HoldingMobileTableRow
        holding={acatsTestSequence[1].holdings[0]} />
    )
  })





// SequenceTable Desktop

storiesOf('Sequence Table/Desktop', module)
  .add('Record with no nested records', () => {
    return <SequenceTableBody record={acatsTestSequence[0]} />
  })

  .add('Record w/nested records', () => {
    return (
      <SequenceTableBody 
        record={acatsTestSequence[1]}>
        {
          acatsTestSequence[1].holdings.map((holding) => {
            return <HoldingTableRow holding={holding} />
          })   
        }
      </SequenceTableBody>
    )
  }) 

