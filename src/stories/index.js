import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Table from '../Table/Table'
import genericTestData from '../testData/generic-data'
import acatsTestSequence from '../testData/acats-sequence'

import SequenceTable from '../SequenceTable/SequenceTable' 
import SequenceRecord from '../SequenceTable/SequenceRecord'
import Holding from '../SequenceTable/Holding'

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
    return (
      <SequenceTable 
        sequence={acatsTestSequence}
        isMobile={true} />
    )
  })

  .add('Record with no nested records', () => {
    return (
      <SequenceRecord
        record={acatsTestSequence[0]} 
        isMobile={true} />
    )
  })

  .add('Record w/nested records', () => {
    return (
      <SequenceRecord
        record={acatsTestSequence[1]}
        isMobile={true}>
        {
          acatsTestSequence[1].holdings.map((holding) => {
            return <Holding holding={holding} />
          })   
        }
      </SequenceRecord>
    )
  }) 

  .add('Holding', () => {
    return (
      <Holding
        holding={acatsTestSequence[1].holdings[0]}
        isMobile={true} />
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

