import React from 'react'
import SequenceTable from './SequenceTable'
import renderer from 'react-test-renderer'

import acatsTestSequence from '../testData/acats-sequence'

describe('Sequence Table', function () {
	it('Matches its mobile snapshot', function () {
		const tree = renderer.create(<SequenceTable sequence={acatsTestSequence} />)
		expect(tree).toMatchSnapshot()
	})
})