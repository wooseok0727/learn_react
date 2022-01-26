import { forwardRef } from 'react'

export default forwardRef(function MyInput(props, ref) {
  return (
    <div>
      <p>MyInput</p>
      <input ref={ref} />
    </div>
  )
})
