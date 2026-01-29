import React from 'react'

export default function ReactQuery02() {
  // useQuery만 사용하여서
  // https://jsonplaceholder.typicode.com/users
  // get요청하여 데이터를 map으로 뿌려주세요

  return (
    <div>
      <h1>유저목록</h1>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>아이디</th>
            <th>성명</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  )
}
