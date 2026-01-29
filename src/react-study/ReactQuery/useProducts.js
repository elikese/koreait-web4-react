// 코드 분리
// -> 아토믹 컴포넌트
// 1. 로직(return 이전코드)은 커스텀 훅들로 js파일로 분리
// 2. retrun이후코드 -> 여러 컴포넌트
// 여러컴포넌트 !== 여러 jsx파일

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// 커스텀 훅
// useQuery 코드를 js파일로 분리
export const useSearchProducts = (nameKeyword) => {
  const {data, isLoading, error, isError} = useQuery({
    // 컨트롤러 이름, 쿼리스트링변수들
    // 컨트롤러 이름, userId or contentId...
    queryKey: ["searchProducts", nameKeyword],
    queryFn: async () => {
      const url = "http://localhost:8080/product/search";
      const res = await axios.get(url, {
        params: { nameKeyword: nameKeyword }
      });
      return res.data;
    },
    // 검색어가 빈값이 아닐때 get요청!
    enabled: !!nameKeyword
  });

  return [data, isLoading, error, isError];
}