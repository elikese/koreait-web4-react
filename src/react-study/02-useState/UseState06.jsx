import React, { useState } from "react";

export default function UseState06() {
    const [memos, setMemos] = useState([]);
    const [inputVal, setInputVal] = useState("");
    // [{id: Date.now() , text:"빨래하기"}, ..{}]
    const handleInputChange = (e) => {

    };
    const addMemoClick = () => {
        
    };
    return (
        <div>
            <input type="text" value={inputVal} onChange={handleInputChange} />
            <button onClick={addMemoClick}>메모 추가하기</button>
            <ul></ul>
        </div>
    );
}
