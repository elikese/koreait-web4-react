import React, { useState } from "react";

export default function UseState05() {
    const [todos, setTodos] = useState([]);
    const [inputVal, setInputVal] = useState("");

    // 정의해놓은 상태들로
    // input에 To-do를 입력하면,
    // ul안에 li들로 Todo들이 보이게 만들어 주세요

    const handleChangeInput = (e) => {
        const value = e.target.value;
        setInputVal(value);
    };

    const addTodoClick = () => {
        // [] -> ["빨래하기"]
        todos.push(inputVal);
        setTodos(todos);
    };

    return (
        <div>
            <input
                type="text"
                // value가 inputVal
                // 변경되면 inputVal이 바뀌어야함
                value={inputVal}
                onChange={handleChangeInput}
                placeholder="TO-DO 입력!"
            />
            <button onClick={addTodoClick}>TO-DO 추가</button>
            <ul>
                {todos.map((todo, i) => {
                    // index를 넣으면 안됨
                    return <li key={i}>{todo}</li>;
                })}
            </ul>
        </div>
    );
}
