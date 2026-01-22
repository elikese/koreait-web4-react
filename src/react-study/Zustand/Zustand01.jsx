// npm install zustand
// 원리 -> 자바스크립트(클로저)
// 전역상태관리 라이브러리:
// Redux(어려움), Zustand(쉬움), Recoil(사라짐), Zotai(중)
// -> useState와는 분리된 상태저장소

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useModalStore } from "./store/modalStore";
import { useToastStore } from "./store/toastStore";

// 의미없이 하위 컴포넌트로 props 전달 -> Props Drilling
export default function Zustand01() {
  // openModal -> 전역상태인 isModalOpen을 true로 바꾸는 함수
  const { openModal } = useModalStore();
  const { showToast } = useToastStore();
  return (
    <div>
      <h1>메인페이지</h1>
      <button onClick={openModal}>모달열기</button>
      {/* 버튼을누르면 MyToast가 보이게 */}
      <button 
        onClick={() => showToast("Z01에서 토스트띄웁니다")}
      >
        토스트 띄우기
      </button>
      <Container1/>
    </div>
  )
}

function Container1() {
  return (
    <div>
      C1이 C2호출
      <Container2/>
    </div>
  )
}

function Container2() {
  return (
    <div>
      C2가 C3호출
      <Container3/>
    </div>
  )
}

function Container3() {
  // isModalOpen -> 전역상태
  // closeModal -> isModalOpen의 상태를 false로 만드는 함수
  const {isModalOpen, closeModal} = useModalStore();
  return (
    <div>
      {
      isModalOpen && 
        <div css={modalOverlay}>
          <div css={modalContent}>
            <h2>MODAL</h2>
            <p>MODAL TEXT</p>
            <button onClick={closeModal}>닫기</button>
          </div>
        </div>
      }
    </div>
  )
}

const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const modalContent = css`
  width: 60vw;
  height: 50vh;
  background-color: white;
  padding: 20px;
  border-radius: 8px;

  /* &: css가 적용된 자기 자신 */
  & > button {
    cursor: pointer;
  }
`;
