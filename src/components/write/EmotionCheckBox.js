import styled from 'styled-components'

const Container = styled.div`
  padding: 10px 24px;
  display: flex;
  justify-content: space-between;
`

const EmotionBox = styled.div`
  border-radius: 20px;
  width: 32.3%;
  padding-bottom: 32.3%;
  position: relative;

  ${({ backgroundColor }) => `background-color: ${backgroundColor};`}
`

const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`

const Emoji = styled.div`
  font-size: 24px;
  top: 15px;
  text-align: center;
  margin-bottom: 10px;
`

const Label = styled.div`
  font-size: 14px;
  color: rgba(0, 12, 30, 0.8);
  font-weight: bold;
  white-space: pre-wrap;
  text-align: center;
  line-height: 1.15;
`

const BOX_INFOS = [
  {
    type: 'SAD',
    emoji: '😢',
    backgroundColor: 'rgb(142, 196, 255)',
    label: '조금 슬픈\n하루였어요',
  },
  {
    type: 'GOOD',
    emoji: '😃',
    backgroundColor: '#ffe69b',
    label: '평범한 \n하루였어요',
  },
  {
    type: 'AWESOME',
    emoji: '😍',
    backgroundColor: 'rgb(255, 128, 128)',
    label: '행복한\n하루였어요',
  },
]

// props는 연결통로(터널)를 뚫어주는 역할.
// <EmotionBox 내의 onClick과 Write.js에서 <EmotionCheckBox의 onClick을 연결해줌
const EmotionCheckBox = ({ onClick }) => {
  return (
    <div>
      <Container>
        {/* 어떤 요소가 클릭되었는지 모름 */}
        {BOX_INFOS.map(({ type, emoji, backgroundColor, label }) => {
          // 클릭된 요소를 알 수 있음
          return (
            <EmotionBox
              key={type}
              onClick={() => {
                // EmotionBox가 클릭되면 해당 box의 type을 전달할것
                onClick(type)
              }}
              backgroundColor={backgroundColor}
            >
              <ContentContainer>
                <Emoji>{emoji}</Emoji>
                <Label>{label}</Label>
              </ContentContainer>
            </EmotionBox>
          )
        })}
      </Container>
    </div>
  )
}

export default EmotionCheckBox
