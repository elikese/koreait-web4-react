import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Router05() {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

// url: "/"
function OrderList() {
  const orders = [
    {product: "노트북", quantity: 1, status: "배송중"},
    {product: "키보드", quantity: 2, status: "배송완료"},
    {product: "마우스", quantity: 3, status: "주문접수"},
  ]

  return (
    <div>
      <h1>주문목록</h1>
      <div>
        {/* orders를 map을사용하여 카드형식으로 뿌려주세요
          상품이름만 보이면 됩니다!
        */}
        {}
      </div>
    </div>
  )
}

// url: /order
function OrderDetail() {
  // props가 아니라 url로 데이터를 전달받아
  // 각 정보를 렌더링해주세요
  return (
    <div>
      <h1>주문 상세 페이지</h1>
      <div>
        <p>상품명:</p>
        <p>주문 수량:</p>
        <p>배송 상태:</p>
      </div>
      <button>목록으로</button>
    </div>
  )
}
