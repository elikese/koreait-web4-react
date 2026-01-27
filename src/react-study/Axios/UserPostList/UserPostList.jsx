import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function UserPostList() {
  const {userId} = useParams(); // URL에서 userId 추출
  // get요청 데이터를 받아줄 상태
  const [posts, setPosts] = useState([]);

  // 1. api 요청 핸들러
  // 2. 핸들결과를 호출하는 useEffect
  // url이 바뀔때마다 get요청! -> userId가 바뀔때마다
  useEffect(() => {}, [userId])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((p) => {
            const {id, title} = p;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{title}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
