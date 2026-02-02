import React, { useState } from 'react'
import { useToastStore } from '../Zustand/store/toastStore';

export default function ProductItem({product}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editVal, setEditVal] = useState({
    name: product.name,
    price: product.price
  });
  const {showToast} = useToastStore();


  const handleEdit = (e) => {
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
              onChange={handleEdit}
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
              onChange={handleEdit}
            />
          : product.price
        }
      </td>
      <td>
        {
          isEditing
          ? (<>
            <button>완료</button>
            <button onClick={() => setIsEditing(false)}>취소</button>
          </>)
          : (<>
            <button onClick={() => setIsEditing(true)}>수정</button>
            <button>삭제</button>
          </>)
        }
      </td>
    </tr>
  )
}
