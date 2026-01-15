import { useState } from "react";

export default function UseState08() {
    const [todos, setTodos] = useState([]);
    const [inputVal, setInputVal] = useState("");

    const addTodoClick = () => {
        setTodos((prev) => [...prev, inputVal]);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputVal(value);
    };

    return (
        <div>
            <input
                type="text"
                value={inputVal}
                onChange={handleInputChange}
                placeholder="할 일 입력!"
            />
            <button onClick={addTodoClick}>할 일 추가</button>
            {/*추가 된게 없다면, <p>"할일이 없습니다"</p> */}
            {/*
            요소가 하나 이상이라면, 
                <ul> 
                    <li>1</li>
                    ...
                <ul> 
            */}
            {/* 간접적인 상태 -> useState로 보관하지x */}
            {
                todos.length > 0 
                ? 
                <ul>
                    {todos.map((todo, i) => {
                        return <li key={i}>{todo}</li>
                    })}
                </ul>
                : <p>할일이 없습니다.</p>
            }
        </div>
    );
}
