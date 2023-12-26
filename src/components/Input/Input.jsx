import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Inputstyle.module.css";

function input() {
  return <input type="text" />;
}

function Name({ onUsernameChange }) {
  const [name, setName] = useState(""); // 이름 상태를 관리하기 위한 state

  const handleNameChange = (e) => {
    setName(e.target.value); // 입력 값이 변경될 때마다 상태 업데이트
    onUsernameChange(e.target.value);
  };

  return (
    <input
      className={styles.nameInput}
      type="text"
      placeholder="이름"
      value={name}
      onChange={handleNameChange}
    />
  );
}

function PasswordInput({ onPasswordChange }) {
  const [newT, setPassword] = useState(""); // 비밀번호 상태를 관리하기 위한 state

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // 입력 값이 변경될 때마다 상태 업데이트
    onPasswordChange(e.target.value);
  };

  return (
    <div className={styles.passwordInputContainer}>
      <input
        className={styles.passwordInput}
        type="text"
        placeholder="비밀번호"
        onChange={handlePasswordChange}
        value={newT}
      ></input>
    </div>
  );
}
let real = [];

function PasswordCheck({ onSubmitPassword }) {
  const [newT, setNewT] = useState("");
  const [isDeleted, setDeleted] = useState(false);
  const changeText = (e) => {
    if (e.nativeEvent.data === null) {
      if (real.length > 0) {
        setNewT("🍪".repeat(real.length - 1));
        real.pop();
      }
    } else {
      real.push(e.nativeEvent.data);
      setNewT("🍪".repeat(real.length));
    }
  };

  const onClick = (e) => {
    const pw = real.join("");
    real = [];
    setNewT("");
    return onSubmitPassword(pw);
  };
  return (
    <div>
      {isDeleted ? (
        <p>삭제되었습니다.</p>
      ) : (
        <div>
          <div>
            <input
              className={styles.PhotodeletePw}
              type="text"
              placeholder="비밀번호"
              onChange={(e) => {
                changeText(e);
              }}
              value={newT}
            ></input>
          </div>
          <div className={styles.PhotodeleteBtn} onClick={onClick}>
            삭제하기
          </div>
          {/* <button onClick={handleDeleteAccount}>계정 삭제</button> */}
        </div>
      )}
    </div>
  );
}

function TitleInput({ onTitleChange }) {
  const [title, setTitle] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    onTitleChange(e.target.value);
  };

  return (
    <input
      className={styles.titleInput}
      type="text"
      placeholder="제목을 입력하세요"
      value={title}
      onChange={handleTitleChange}
    />
  );
}

export { input, Name, PasswordInput, PasswordCheck, TitleInput };
