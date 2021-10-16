import { useEffect, useRef } from "react"
import Item2 from "../global/Item2"
import MySlick from "../global/Slick"
import data from '../fakeJson.json'

const List1 = ({ title }) => {
  const nextBtn = useRef(null)
  const prevBtn = useRef(null)

  
  useEffect(() => {
    let oldPrev = document.querySelector('.list1 .slick-arrow.slick-prev')
    let oldNext = document.querySelector('.list1 .slick-arrow.slick-next')

    if (nextBtn?.current && prevBtn?.current) {
      nextBtn.current.addEventListener('click', () => {
        oldNext.click()
      })

      prevBtn.current.addEventListener('click', () => {
        oldPrev.click()
      })
    }

  }, [nextBtn, prevBtn])
  return (
    <div className='list1'>
      <div className='container'>
        <div className='list1-container'>
          <div className='list1-header'>
            <h2 className='title'>
              {title}
            </h2>
            <div className='list-btn'>
              <button ref={prevBtn} className='prev'>
                <i className="fas fa-chevron-left"></i>
              </button>
              <button ref={nextBtn} className='next active'>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <div className='list'>
            <MySlick>
              {
                data.map((item, index) => (
                  <Item2 item={item} key={index} />
                ))
              }
            </MySlick>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List1