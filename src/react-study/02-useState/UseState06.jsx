import React, { useState } from "react";

export default function UseState06() {
    const [memos, setMemos] = useState([]);
    const [inputVal, setInputVal] = useState("");
    const [done, setDone] = useState(false);

    // [{id: Date.now() , text:"빨래하기", done: true}, ..{}]
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputVal(value);
    };

    const addMemoClick = () => {
        setMemos((prev) => {
            return [
                ...prev,
                {
                    id: Date.now(),
                    text: inputVal,
                    done: done,
                },
            ];
        });
        setInputVal("");
    };

    const handleCheckClick = (e) => {
        // 체크박스 체크시 true담겨있음 <> 체크x -> false
        const checkVal = e.target.checked;
        setDone(checkVal);
    };

    return (
        <div>
            <input type="text" value={inputVal} onChange={handleInputChange} />
            <input type="checkbox" checked={done} onChange={handleCheckClick} />
            <button onClick={addMemoClick}>메모 추가하기</button>
            <ul>
                {memos.map((memo) => {
                    // {id:20260114..., text:"빨래하기", done:true}
                    const { id, text, done } = memo;
                    return (
                        <li key={id}>
                            {text}
                            <input type="checkbox" checked={done} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
