import React from 'react'

import List1 from "../../global/List1"

const HomeLiveAuctions = ({ data }) => {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

  return (
    <List1 data={arr} title='Live Auctions' />
  )
}

export default React.memo(HomeLiveAuctions)