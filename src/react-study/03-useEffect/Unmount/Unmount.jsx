import { useState } from "react"
import A from "./A";
import B from "./B";

export default function Unmount() {
    const [showA, setShowA] = useState(true);

    const toggle = () => {
        setShowA((prev) => !prev);
    }
  return (
    // <></> fragment
    <>
        <button onClick={toggle}>컴포넌트 전환</button>
        {showA ? <A /> : <B />}
    </>
  );
}
