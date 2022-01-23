import { createContext, useContext, useState } from 'react'

// 빈 박스를 만듦
const Context = createContext()

// 제공자 = Provider
// children = 감싸져있는 자식들
export const FilterContextProvider = ({ children }) => {
  const [filter, setFilter] = useState('ALL')

  // 박스에 감싸진 모든 요소는 filter와 setFilter에 접근이 가능하다.
  return (
    <Context.Provider value={{ filter, setFilter }}>
      {children}
    </Context.Provider>
  )
}

// 제공 받는 자 = Consumer
// 가져다 쓸 때 사용하는 함수
// 제공받는 컴포넌트들은 useFilterContext를 이용하여 값을 빼옴
export const useFilterContext = () => {
  return useContext(Context)
}
