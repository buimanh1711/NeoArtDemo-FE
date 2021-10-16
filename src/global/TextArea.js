import TextareaAutosize from 'react-textarea-autosize'

const TextArea = ({ placeholder, id, ref }) => {
  return (
    <TextareaAutosize id={id} ref={ref} placeholder={placeholder} className='textarea-input scroll2' />
  )
}

export default TextArea