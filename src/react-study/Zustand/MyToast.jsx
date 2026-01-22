/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useEffect } from "react"
import { useToastStore } from "./store/toastStore"
const toastStyle = css`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #777;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  opacity: 0.8;
`

export default function MyToast() {
  const {} = useToastStore();

  useEffect(() => {
    // useEffect의 전체코드는 toast전역상태가 true일때만
    const timer = setTimeout(() => {
      // toast전역상태를 false로 바꾸는 함수 호출
    } ,2500)

    return () => clearTimeout(timer)
  }, [])

  // 조건문으로 toast전역상태가 false면
  // return null

  return (
    <div css={toastStyle}>MyToast</div>
  )
}
