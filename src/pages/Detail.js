import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import Navbar from '../components/shared/Navbar'
import Title from '../components/shared/Title'
import { EMOJI_MAPPER } from '../constants'

const Contents = styled.div`
  padding: 0 24px;
  line-height: 1.4;
`

const FooterContainer = styled.div`
  text-align: right;
  padding: 0 24px;
  margin-top: 30px;
`

const Button = styled.button`
  background-color: rgba(69, 147, 252, 0.12);
  color: #1b64da;
  padding: 6px 12px;
  border-radius: 6px;
`

const DetailPage = () => {
  // useParams router에서 path 뒤 :id 부분을 가져옴
  // useParams로 가져온 데이터는 string
  const { no } = useParams()
  const [diary, setDiary] = useState(null)

  // id가 변할 때 id를 가진 요소를 찾아야 한다.
  useEffect(() => {
    const diaries = JSON.parse(
      window.localStorage.getItem('DIARIES_KEY') || '[]',
    )

    const diary = diaries.find((diary) => {
      // 실제로 저장한 데이터는 number타입이기 때문에 동일하게 맞춰줘야 함
      return diary.id === Number(no)
    })

    setDiary(diary)
  }, [no])

  // 제대로 값을 불러오지 못했다면 return null을 하고 나감 = 화면에 그리지 않음
  if (diary == null) {
    return null
  }

  // 이 아래 함수는 데이터가 있어야 실행됨

  // 이 페이지에서만 임시로 이름을 바꿀 수 있음
  // const { createdAt, emotion, memo, id: currentDiaryId } = diary
  const { createdAt, emotion, memo, id } = diary

  const handleDiaryRemove = () => {
    const diaries = JSON.parse(
      window.localStorage.getItem('DIARIES_KEY') || '[]',
    )

    const newDiaries = diaries.filter((diary) => {
      return diary.id !== id
    })

    window.localStorage.setItem('DIARIES_KEY', JSON.stringify(newDiaries))

    window.history.back()
  }

  return (
    <div>
      <Navbar />
      <Title title={`${createdAt} ${EMOJI_MAPPER[emotion]}`} />
      <Contents>{memo}</Contents>
      <FooterContainer>
        <Button onClick={handleDiaryRemove}>삭제</Button>
      </FooterContainer>
    </div>
  )
}

export default DetailPage
