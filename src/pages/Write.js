import { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/shared/Navbar'
import Title from '../components/shared/Title'

import EmotionCheckBox from '../components/write/EmotionCheckBox'
import TextArea from '../components/write/TextArea'
import SubmitButton from '../components/write/SubmitButton'
import getDateNow from '../utils/getDateNow'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const WritePage = () => {
  const { nowDate } = getDateNow()

  // 새로운 일기를 추가하기 위한 값
  // id, memo, emotion, createdAt
  const [diary, setDiary] = useState({
    id: Date.now(),
    memo: '',
    emotion: '',
    createdAt: nowDate,
  })

  // diary의 memo값을 바꾸는 함수
  const handleDiaryMemo = (event) => {
    setDiary({
      ...diary,
      memo: event.target.value,
    })
  }

  const handleEmotionClick = (emotion) => {
    setDiary({
      ...diary,
      emotion,
    })
  }

  const handleSubmit = () => {
    /*
     * 로컬스토리지
     * setItem
     * 첫번째 인자에 key, 두번째 인자에 value를 받는데
     * 두개의 값 모두 string 타입으로 받는다.
     *
     * getItem은 string을 반환한다.
     *
     * JSON.parse : string data => object data
     * JSON.stringify : (not string data) => string
     */

    // 1. 이전 데이터를 가져옴 (이전 데이터가 없다면 빈 배열을 넘겨줌)
    const diaries = JSON.parse(
      window.localStorage.getItem('DIARIES_KEY') || '[]',
    )

    // 2. 새로운 데이터를 추가하여 저장한다.
    const newDiaries = [...diaries, diary]
    window.localStorage.setItem('DIARIES_KEY', JSON.stringify(newDiaries))

    // 3. 저장 후 뒤로가기
    window.history.back()
  }

  return (
    <div>
      <Container>
        <Navbar />
        <Title
          title={`오늘은\n어떤 하루를 보내셨나요?`}
          subTitle={`오늘 날짜`}
        />
        {/* 현재 선택된 emotion 타입 구분가능하도록 */}
        <EmotionCheckBox onClick={handleEmotionClick} />
        <TextArea label="기록" onChange={handleDiaryMemo} value={diary.memo} />
        {/* 이상한 데이터가 들어오지 못하도록 memo나 emotion이 설정되지 않았다면 넘어가지 않도록 막아야함 */}
        <SubmitButton label="작성하기" onClick={handleSubmit} />
      </Container>
    </div>
  )
}

export default WritePage
