import { useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'

export default function FormInput({isPasswordMode, setIsPasswordMode}) {
  const [isEditMode, setIsEditMode] = useState(false);
  const queryClient = useQueryClient();
  // useQuery쿼리키를 통해 캐싱된 전역데이터 가져오기 ok
  const user = queryClient.getQueryData(["getMyInfo"]);
  


  return (
    <>
      <div>
        <label>이름</label>
        <input type="text" />
      </div>
      <div>
        <label>이메일</label>
        <input type="text" />
      </div>
      <button onClick={() => setIsPasswordMode(true)}>비밀번호 변경</button>
      {
        isEditMode
        ? <button 
            onClick={() => setIsEditMode(true)}
          >
            수정하기
          </button>
        : (
          <div>
            <button 
              onClick={() => setIsEditMode(false)}
            >
              취소하기
            </button>
            <button>수정완료</button>
          </div>
        )
      }
    </>
  )
}
