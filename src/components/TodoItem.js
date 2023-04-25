/*
  각각의 할 일 항목을 렌더링하는 컴포넌트입니다.
  각 할 일의 완료 상태에 따라 체크박스와 텍스트 스타일을 동기화하며,
  삭제 버튼을 통해 해당 할 일을 삭제할 수 있습니다.
  이 컴포넌트는 `TodoList.js`에서 사용되어 할 일 목록을 구성합니다.
*/
import React from "react";
import styles from "@/styles/TodoList.module.css";

// TodoItem 컴포넌트를 정의합니다.
const TodoItem = ({ todo, onToggle, onDelete, onUpper, onLower }) => {
  // 각 할 일 항목을 렌더링합니다.
  const handleToggle = () => {
    // 완료 상태를 업데이트합니다.
    onToggle();

    // 체크박스가 체크되어 있을 때 "VERY GOOOOD"을 출력합니다.
    if (!todo.completed) {
      console.log("VERY GOOOOD");
    }
  };

  return (
    <li className={styles.todoItem}>
      {/* 체크박스를 렌더링하고, 체크박스의 상태를 할 일의 완료 상태와 동기화합니다.
          체크박스의 상태가 변경되면 handleToggle 함수를 호출하여 완료 상태를 업데이트합니다. */}
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />

      {/* 할 일의 텍스트를 렌더링하고, 완료 상태에 따라 텍스트에 취소선을 적용합니다. */}
      <span
        className={styles.todoText}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>

      {/* 삭제 버튼을 렌더링하고, 클릭 시 onDelete 함수를 호출하여 해당 할 일을 삭제합니다. */}
      <button onClick={onDelete}>Delete</button>
      <button onClick={onUpper}>🔺</button>
      <button onClick={onLower}>🔻</button>
      <button>lucky</button>
    </li>
  );
};

// TodoItem 컴포넌트를 내보냅니다.
export default TodoItem;
