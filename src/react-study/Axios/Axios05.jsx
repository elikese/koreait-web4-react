import React, { useState } from 'react'

export default function Axios05() {
  // 다건추가 -> dto의 모습 [{}, {}.., {}]
  const [productList, setProductList] = useState([
    {name: "", price: ""}, // 초기값 1개의 객체만
  ])

  // 한줄 추가 핸들러
  const handleAddRow = () => {
    setProductList((prev) => {
      return [...prev, {name: "", price: ""}]
    })
  }

  // 1. e객체는 몇번째 input에 내가 입력하는지 모름
  // 2. 어떻게 정확하게 index를 특정할 수 있을까?
  const handleinputVal = (e, idx) => {
    // e객체로는 필드명과 값만 특정할 수 있음
    const {name, value} = e.target;

    // 새로운 객체로 set해줘야 setter 호출됨
    const newProductList = [...productList];
    // idx로 js객체를 불러와서 name에 해당하는 필드만 수정
    newProductList[idx] = {
      ...newProductList[idx],
      [name]: value
    };

    setProductList(newProductList);
  }

  const handleAddBulk = () => {
    // 전송전에 확인
    console.log(productList);
  }

  const handleRowRemove = (idx) => {
    // productList에서 해당 idx만 제거
    // 이것만 빼고 다 ok
    
  }

  return (
    <div>
      <h1>상품 다건 추가</h1>
      <div>
        {productList.map((product, idx) => {
          return (
            // key로 idx말고, product.id필요
            <div key={idx}>
              <input 
                type="text" 
                placeholder='상품명'
                name='name'
                value={product.name}
                onChange={(e) => handleinputVal(e, idx)}
              />
              <input 
                type="number" 
                placeholder='가격'
                name='price'
                value={product.price}
                onChange={(e) => handleinputVal(e, idx)}
              />
              <button>삭제</button>
            </div>
          )
        })}
      </div>

      <button onClick={handleAddRow}>한 줄 추가</button>
      <button onClick={handleAddBulk}>전체 등록</button>
    </div>
  )
}
