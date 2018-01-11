/**
 * Notes:
 * - Need to verify/finalize structure
 * - Object that maps type/status constants to copy
 */

const acatsTestSequence = [
  {
    id: 0,
    date: '07/25/2017',
    type: 'Rebalance',
    status: 'Pending',
  },
  {
    id: 1,
    date: '07/22/2017',
    type: 'ACATS',
    status: 'Success',
    holdings: [
      {
        symbol: 'Cash',
        shareQuantity: 1000,
        sharePrice: 1,
      },
      {
        symbol: 'SSTK',
        shareQuantity: 1000,
        sharePrice: 1,
      },
    ],
  },
  {
    id: 2,
    date: '07/16/2017',
    type: 'Transfer Process Initiated',
  },
  {
    id: 3,
    date: '07/11/2017',
    type: 'Stock rest and settle',
    status: 'Complete',
  },
]

export default acatsTestSequence