import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import BannerPage from './pages/Banner'
import DetailPage from './pages/Detail'
import ListPage from './pages/List'
import ModifyPage from './pages/Modify'
import WritePage from './pages/Write'
// import InputRenderer from './components/InputRenderer'

import ResetStyles from './components/shared/ResetStyles'

const StyledContainer = styled.div`
  max-width: 800px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  // background-color: #e5e5e5;
`

const onSubmit = () => {
  alert('submitted')
}

const App = () => {
  return (
    // <div className="App">
    //   <InputRenderer></InputRenderer>
    // </div>
    <StyledContainer>
      <ResetStyles />
      {/* BrowserRouter: 브라우저 히스토리에 대한 관심사를 담고 있는 박스 */}
      <BrowserRouter>
        {/* Routes: Route들을 감싸서 특정 경로에 맞게 컴포넌트를 스위칭 해줌 */}
        <Routes>
          {/* Route: 특정 경로로 진입했을 때 특정 컴포넌트를 노출 */}
          <Route path="/" element={<ListPage />} />
          <Route path="/write" element={<WritePage />} />
          {/*
            path 뒤에 콜론(:)과 함께 설정해주면 콜론 뒤의 값은 유동적이라는 것!
          */}
          <Route path="/detail/:no" element={<DetailPage />} />
          <Route path="/modify" element={<ModifyPage />} />
          <Route path="/banner" element={<BannerPage />} />
          <Route
            path="*"
            element={
              <div>
                <h1>Wrong Page!</h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>

      {/* <input placeholder="Username" />
      <br />
      <input placeholder="Password" />
      <br />
      <button onClick={onSubmit}>Login</button> */}
    </StyledContainer>
  )
}

export default App
