import { useState } from 'react'

import Box from '../components/banner/Box'

const BannerPage = () => {
  // 넓이
  const [width, setWidth] = useState(100)
  // 높이
  const [height, setHeight] = useState(100)
  // 색상
  const [color, setColor] = useState('#333333')
  // 텍스트
  const [text, setText] = useState('Hello Banner')

  return (
    <div>
      <ul>
        <li>
          <label>넓이</label>
          <input
            placeholder="넓이"
            value={width}
            onChange={(e) => {
              setWidth(e.target.value)
            }}
          />
        </li>
        <li>
          <label>높이</label>
          <input
            placeholder="높이"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value)
            }}
          />
        </li>
        <li>
          <label>색상</label>
          <input
            placeholder="색상"
            value={color}
            onChange={(e) => {
              setColor(e.target.value)
            }}
          />
        </li>
        <li>
          <label>텍스트</label>
          <input
            placeholder="텍스트"
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
          />
        </li>
      </ul>
      {/*
        a={a}
        앞의 a는 하위 컴포넌트(ex.Box)에서 받을 props 이름 (Box.js:2)
        뒤의 a는 내(ex.BannerPage)가 가진 값 (BannerPage.js:7~)
      */}
      <Box width={width} height={height} color={color} text={text} />
    </div>
  )
}

export default BannerPage
