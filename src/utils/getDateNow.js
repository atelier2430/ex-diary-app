const WEEKDAY_LABELS = ['일', '월', '화', '수', '목', '금', '토']

// 오늘 날짜를 알려줌
function getDateNow() {
  const now = new Date()

  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const day = now.getDate()

  const weekday = now.getDay()

  return {
    nowDate: `${year}.${month}.${day}`,
    weekdayLabel: WEEKDAY_LABELS[weekday],
  }
}

export default getDateNow
