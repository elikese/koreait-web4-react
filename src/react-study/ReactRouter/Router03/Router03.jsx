import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom'
/** @jsxImportSource @emotion/react */
import * as s from "./styles";

const reservations = [
  {id:1, name: "홍길동", room: "101호", date: "2026-01-25"},
  {id:2, name: "김길동", room: "201호", date: "2026-01-26"},
  {id:3, name: "이길동", room: "301호", date: "2026-01-27"},
  {id:4, name: "최길동", room: "401호", date: "2026-01-28"},
]

export default function Router03() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReservationList/>}/>
        <Route path="/reservation/:id" element={<ReservationDetail />}/>
      </Routes>
    </BrowserRouter>
  )
}
// 도전! ReservationList 컴포넌트에서
// 1. ReservationCard를 map으로 뿌려주세요.
// 2. 해당 카드를 클릭하면 Deatil로 이동하게 만들어주세요
// 3. url에 해당 reservation의 id가 포함되어야 합니다

function ReservationDetail() {
  // 카드용 api(다건조회)랑 디테일 api(단건조회) 구분되어 있음
  // 일반적으로는 id값을 url로 넘겨서 Detail화면에서 api요청
  const {id} = useParams();
  // url에서 가져온 id -> 숫자x 문자열

  // 실제로는 api 호출
  const myReservation = reservations.find((r) => r.id === parseInt(id))


  const navigate = useNavigate();
  // url을 타이핑해서 들어오는 경우
  // myReservation이 없다면
  if (!myReservation) {
    return (
      <div css={s.card}>
        <h2>잘못된 접근</h2>
        <button onClick={() => navigate("/")}>돌아가기</button>
      </div>
    )
  }

  const {name, room, date} = myReservation;
  return (
    <div css={s.card}>
      <h1>예약 상세정보</h1>
      <p>예약번호: #{id}</p>
      <p>예약자: {name}</p>
      <p>호실: {room}</p>
      <p>예약일자: {date}</p>
      <button onClick={() => navigate("/")}>돌아가기</button>
    </div>
  )
}

function ReservationCard({reservation, onClick}) {
  const {id, name, room, date} = reservation;
  return (
    <div css={s.card} onClick={onClick}>
      <h3>{name}님의 예약</h3>
      <p>예약번호: {id}</p>
      <p>객실: {room}</p>
      <p>날짜: {date}</p>
    </div>
  )
}

function ReservationList() {
  // url변경 가능
  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/reservation/${id}`);
  }

  return (
    <div css={s.container}>
      <h1>예약목록</h1>
      <div css={s.cardList}>
        {reservations.map((r) => {
          return (
          <ReservationCard 
            key={r.id}  
            reservation={r}
            onClick={() => navigate(`/reservation/${r.id}`)}
          />
        )
        })}
      </div>
    </div>
  )
}