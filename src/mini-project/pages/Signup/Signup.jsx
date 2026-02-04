/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import * as s from "./styles";
import only_logo from "../../../assets/only_logo.svg";

export default function Signup() {
  return (
    <div css={s.container}>
      <div css={s.signupBox}>
        <div css={s.logoBox}>
          <img src={only_logo} alt="logo" css={s.logo} />
        </div>
        <h1 css={s.title}>회원가입</h1>
        <div css={s.formBox}>
          <button css={s.btn}>회원가입</button>
          <div css={s.linkBox}>
            <span css={s.linkText}>이미 계정이 있으신가요?</span>
            <Link to="/signin" css={s.link}>로그인</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
