import styled, { css } from 'styled-components'

// 믹스인
const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

// 스타일을 가진 컴포넌트
const Container = styled.div`
  ${flexCenter}
  font-weight: 600;
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  ${({ width }) => {
    return width ? `width: ${width}px;` : ''
  }}
  ${({ height }) => {
    return height ? `height: ${height}px;` : ''
  }}
  ${({ color }) => {
    return color ? `background-color: ${color};` : ''
  }}
`

const Box = ({ width, height, color, text }) => {
  return (
    <div>
      <Container width={width} height={height} color={color}>
        {text}
      </Container>
    </div>
  )
}

// 스타일을 상속받은 새로운 컴포넌트
// Container 를 가져오되 color는 red로 적용
const NewContainer = styled(Container)`
  color: red;
`

export default Box
