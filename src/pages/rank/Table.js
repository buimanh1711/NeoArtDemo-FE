import RankTableItem from "./TableItem"
import React, { useEffect, useRef, useState } from 'react'
import data from '../../fakeJson.json'

const RankTable = () => {
  const [chartWidth, setChartWidth] = useState(0)

  const container = useRef(null)
  useEffect(() => {
    if (container?.current) setChartWidth(container.current.offsetWidth)
  }, [container.current])

  return (
    <div className='table-container'>
      <table>
        <tr className='title-row'>
          <th className='name'>NAME</th>
          <th>24 HOURS VOLUME</th>
          <th>7 DAY CHANGE</th>
          <th>7 DAY VOLUME</th>
          <th>TOTAL VOLUME</th>
          <th>AVG PRICE</th>
          <th>TOTAL NFT</th>
          <th className='chart' ref={container}>CHART</th>
        </tr>
        {
          data.map((item, index) => (
            <RankTableItem width={chartWidth} item={item} index={index} key={index} />
          ))
        }
      </table>
    </div>
  )
}

export default React.memo(RankTable)