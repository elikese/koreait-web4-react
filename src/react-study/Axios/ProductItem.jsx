import React, { useState } from 'react'

// 상품 하나당 ProductItem 컴포넌트 한개
export default function ProductItem({product}) {
  // 수정상태에 따라 달라는 조건부 렌더링
  // 수정인지 아닌지 판단하는 상태
  const [isEditing, setIsEditing] = useState(false);
  // 수정시, input들의 값을 저장하는 상태
  const [editVal, setEditVal] = useState({
    name: product.name,
    price: product.price
  }); // get으로 받아온 데이터를 초기값으로

  const handleChange = (e) => {
    const {name, value} = e.target;
    setEditVal((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  return (
    <tr>
      <td>{product.id}</td>
      <td>
        {
          isEditing 
            ? <input 
                type='text'
                name='name'
                value={editVal.name}
                onChange={(e) => handleChange(e)}
              />
            : product.name
        }
      </td>
      <td>
        {
          isEditing 
            ? <input 
                type='number'
                name='price'
                value={editVal.price}
                onChange={(e) => handleChange(e)}
              />
            : product.price
        }
      </td>
      <td>
        {
          isEditing
          ? <>
              <button>완료</button>
              <button 
                onClick={() => setIsEditing(false)}
              >취소</button>
            </>
          : <>
              <button
                onClick={() => setIsEditing(true)}
              >수정</button>
              <button>삭제</button>
            </>
        }
      </td>
    </tr>
  )
}
