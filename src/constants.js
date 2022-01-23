// 프로젝트에서 사용되는 상수들을 모아놓은 파일

// id: 고유값
// memo: 내용
// createdAt: 작성 날짜
// emotion: 기분

export const MOCKS = [
  {
    id: 0,
    memo: '오늘은 배가 너무 고팠다.',
    createdAt: '2022.01.15',
    emotion: 'SAD',
  },
  {
    id: 1,
    memo: '오늘은 그냥 그랬다.',
    createdAt: '2022.01.16',
    emotion: 'GOOD',
  },
  {
    id: 2,
    memo: '오늘은 행복했다.',
    createdAt: '2022.01.17',
    emotion: 'AWESOME',
  },
]

export const FILTER_LABELS = {
  ALL: '전체',
  SAD: '슬픔',
  GOOD: '좋음',
  AWESOME: '매우 좋음',
}

export const EMOJI_MAPPER = {
  SAD: '😢',
  GOOD: '😃',
  AWESOME: '😍',
}

// export { MOCKS, FILTER_LABELS }
