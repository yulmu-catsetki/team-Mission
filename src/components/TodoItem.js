import React from "react";
import styles from "@/styles/TodoList.module.css";

// TodoItem 컴포넌트를 정의합니다.
const TodoItem = ({ todo, onToggle, onDelete, onUpper, onLower }) => {
  // 완료 버튼을 눌렀을 때 실행될 함수
  const handleComplete = () => {
    alert("VERY GOOOOOD");
    onToggle();
  };

  // 각 할 일 항목을 렌더링합니다.
  return (
    <li className={styles.todoItem}>
      {/* 체크박스를 렌더링하고, 체크박스의 상태를 할 일의 완료 상태와 동기화합니다.
          체크박스의 상태가 변경되면 onToggle 함수를 호출하여 완료 상태를 업데이트합니다. */}
      <input type="checkbox" checked={todo.completed} onChange={handleComplete} />

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
