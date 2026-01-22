import { create } from "zustand";

export const useCurrentBook = create((set) => {
  return {
    book: {
      title: "",
      author: "",
      price: 0
    }
    // book을 교체할 수 있도록
    // setter를 이용하여 함수를 만들어 주세요
  }
})