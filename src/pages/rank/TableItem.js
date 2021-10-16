import { Link } from "react-router-dom"
import RankChart from "./RankChart"

const RankTableItem = ({ item, index, width }) => {
  return (
    <tr className={index % 2 === 0 ? 'data-row' : 'data-row even'}>
      <th className='name'>
        <span>{index + 1}.</span>
        <img src={item.image} />
        <Link>{item.title}</Link>
      </th>
      <th>174.213 BNB</th>
      <th>520.65%</th>
      <th>269.733 BNB</th>
      <th>568.652 BNB</th>
      <th>3.107 BNB</th>
      <th>12,333</th>
      <th className='chart'>
        <RankChart chartWidth={width} />
      </th>
    </tr>
  )
}

export default RankTableItem