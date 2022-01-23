import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Button = styled.button`
  padding: 9px;
  // border: 0 none;
  border-radius: 5px;
  // box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  font-weight: 500;
  // outline: none;
`

const WriteButton = () => {
  // a 태그(Link) X, 함수 이벤트를 이용해서 페이지 이동하기

  const navigate = useNavigate()
  const moveToWritePage = () => {
    // 글 작성 페이지로 이동
    navigate('/write')
  }

  return <Button onClick={moveToWritePage}>오늘을 기록하기</Button>
}

export default WriteButton
