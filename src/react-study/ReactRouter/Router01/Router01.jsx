// React Router - 필수라이브러리
// 설치: npm install react-router-dom
// 원래: URL을 바꾸면? get요청

import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";

// 라우터 라이브러리: URL을 바꾸면? 컴포넌트 호출
export default function Router01() {
  // 라우팅만 하는 컴포넌트
  return (
    
    /* 
      BrowserRouter: 리액트라우터 최상위 컴포넌트
      - 이 컴포넌트 내부에서만 url 라우팅(Link, Route)이 가능
      - url이 변경될 때 브라우저가 작동하는 기본작동을 막고
      리액트 방식(컴포넌트호출)으로 작동하게 해줌

      Routes: 여러 Route들을 그룹화하는 컨테이너
      -> if-else if문
      Route: URL경로와 컴포넌트를 매칭
      - path: url 경로
      - element: 해당경로에서 렌더링할 컴포넌트
    */
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* path="/*" -> 정의되지 않는 모든 경로를 처리(else) */}
        <Route path="/*" element={<h1>에러페이지(404)</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

function MainPage() {
  // a -> 페이지 전체가 새로고침: 상태가 초기화됨
  // 상태를 초기화해야하는 경우: 로그인 -> 메인페이지
  // Link -> 컴포넌트 교체만 일어남: 상태가 유지
  return (
    <div>
      <h1>메인페이지</h1>
      <nav>
        <a href="/profile">프로필</a>
        <a href="/contact">연락처</a>
        <Link to="/profile">프로필</Link>
        <Link to="/contact">연락처</Link>
      </nav>
    </div>
  )
}

function ProfilePage() {
  // 리액트라우터의 훅
  // 리턴된 것은 함수!
  const navigate = useNavigate();

  const handleSaveProfile = () => {
    alert("프로필 저장이 완료되었습니다!")

    // 저장완료 후 메인페이지로 자동 이동
    navigate("/"); // 컴포넌트만 교체
  }

  const handleCancel = () => {
    /*
     라우터 대상들은 BrowserRouter에 감싸져 있음
     BrowserRouter는 함수호출 순서를 상태로 가지고 있음
     -> 방문기록을 상태로 가지고 있음
     
     navigate(-1) -> 바로 직전페이지(뒤로가기) 이동
     navigate(-2) -> 2단계 이전페이지 이동
     */
    navigate(-1);
  }

  return (
    <div>
      <h1>프로필 페이지</h1>
      <div>
        <button onClick={handleSaveProfile}>저장하고 메인으로</button>
        <button onClick={handleCancel}>취소(뒤로가기)</button>
      </div>
    </div>
  )
}

function ContactPage() {
  // 전송버튼을 누르면
  // confirm으로 전송하시겠습니까?
  // true면 전송완료! alert 후 메인으로 이동
  // 메인으로-> 라우팅되게 변경
  return (
    <div>
      <h1>연락처 페이지</h1>
      <button>전송</button>
      <div>메인으로</div>
    </div>
  )
}