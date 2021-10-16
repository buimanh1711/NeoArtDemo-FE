import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleNotif } from "../redux/web/web.slice"

const ToastNotif = () => {
  const dispatch = useDispatch()
  const { type, content } = useSelector(state => state.web.notif)
  const [width, setWidth] = useState()
  const [timeCount, setTimeCount] = useState()

  
  const close = () => {
    dispatch(toggleNotif({ type: null, content: '' }))
  }

  const maxWidth = useRef(null)
  useEffect(() => {
    if (maxWidth?.current?.offsetWidth) {
      setWidth(maxWidth.current.offsetWidth)
      setTimeCount(2000 / maxWidth.current.offsetWidth)
    }
  }, [maxWidth])

  useEffect(() => {
    var timer 
    if (width >= 0) {
      timer = setTimeout(() => {
        console.log(width)
        setWidth(width - 1)
      }, [timeCount])
    } else if (width < 0) {
      close()
    }

    return () => clearTimeout(timer)
  }, [width, timeCount])

  if (!type || content === '')
    return null

  return (
    <div id='toast_notif'>
      <div ref={maxWidth} className={'toast_notif-wrapper ' + type}>
        {
          type === 'Success' &&
          <i className='icon icon-check-e Success' />
        }
        {
          type === 'Error' &&
          <i className='icon icon-t-warning-e Error' />
        }
        {
          type === 'Info' &&
          <i className='icon icon-c-info-e Info' />
        }
        {
          type === 'Warning' &&
          <i className='icon icon-c-warning-e Warning' />
        }
        <div className='content-wrapper'>
          <p className='type'>
            {type}
          </p>
          <p className='content'>
            {content}
          </p>
        </div>
        <i onClick={close} className='icon icon-e-remove-1 close' />
        <span style={{ width: `${width}px` }} className='time'></span>
      </div>
    </div>
  )
}

export default ToastNotif