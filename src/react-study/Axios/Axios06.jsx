import { useEffect, useState } from "react"
import ProductItem from "./ProductItem";
import { getAllProductsApi } from "./apis/productApi";

export default function Axios06() {
  const [products, setProducts] = useState([]);
  // ui 테스트 가짜데이터
  const mockProducts = [
    {id:1, name:"가짜키보드", price: 10000},
    {id:2, name:"가짜마우스", price: 20000}
  ];

  const getProducts = async () => {
    try {
      const res = await getAllProductsApi();
      const productsData = res.data;
      setProducts(productsData);
    } catch (error) {
      // 비워둘게요
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>상품목록</h1>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>상품명</th>
            <th>가격</th>
            <th>수정/삭제</th>
          </tr>
        </thead>
        <tbody>
          {mockProducts.map((p) => {
            return <ProductItem key={p.id} product={p}/>
          })}
        </tbody>
      </table>
    </div>
  )
}
