import React, { useState } from 'react'
import { useBookList } from './store/bookStore'

export default function Zustand04() {
  const {books} = useBookList();
  const [form, setForm] = useState({
    title: "",
    author: "",
    price: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value
      }
    });
  }

  return (
    <div>
      <h2>책 정보 입력</h2>
      <input 
        type="text"
        name='title'
        placeholder='책제목'
        onChange={handleChange}
        value={form.title}
      />
      <input 
        type="text"
        name='author'
        placeholder='저자'
        onChange={handleChange}
        value={form.author}
      />
      <input 
        type="number"
        name='price'
        placeholder='가격'
        onChange={handleChange}
        value={form.price}
      />
      <button onClick={handleAdd}>추가</button>
      <ul>
        {books.map((book) => {
          return <Book key={book.id} book={book}/>
        })}
      </ul>
    </div>
  )
}

// onRemove, onUpdate는 useBookList로 받은 함수
function Book({book, onRemove, onUpdate}) {
  const {title, author, price} = book;
  const [isEditing, setIsEditing] = useState(false);
  return (
    <li>
      <strong>{title}</strong> - {author}
      {/* 수정 버튼누르면 
      1. price를 다시 입력할수있게 input
      2. 취소버튼
      3. 완료버튼
      */}
      {isEditing}
      <>
        <span>{price}원</span>
        <button>수정</button>
        <button>삭제</button>
      </>
    </li>
  )
}
