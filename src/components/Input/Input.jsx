import React, { useState } from "react";
import styles from "./Inputstyle.module.css";

function input() {
  return <input type="text" />;
}

function Name({ onUsernameChange }) {
  const [name, setName] = useState(""); // 이름 상태를 관리하기 위한 state

  const handleNameChange = (e) => {
    setName(e.target.value); // 입력 값이 변경될 때마다 상태 업데이트
    onUsernameChange(name);
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

const real = [];

function PasswordInput({ onPasswordChange }) {
  const [newT, setPassword] = useState(""); // 비밀번호 상태를 관리하기 위한 state

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // 입력 값이 변경될 때마다 상태 업데이트
    onPasswordChange(newT);
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

function PasswordCheck() {
  const [newT, setNewT] = useState("");
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isDeleted, setDeleted] = useState(false);

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

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

  const handlePhotoDelete = () => {
    // 여기에서는 인증 API를 호출하고, 성공적으로 인증되면 상태를 업데이트합니다.
    // 아래는 간단한 시뮬레이션 코드입니다.

    const correctPassword = "your_password"; // 실제 비밀번호를 입력하세요.

    if (newT === correctPassword) {
      setAuthenticated(true);
      // alert('인증되었습니다.');
      setDeleted(true);
      console.log(isAuthenticated);
      // }).catch((error) => {
      //   console.error('삭제 실패:', error);
      // });

      // 시뮬레이션: 간단하게 삭제 성공으로 가정
      // setDeleted(true);
    } else {
      // alert('비밀번호가 일치하지 않습니다.');
    }
  };

  // const handleDeleteAccount = () => {
  //   if (isAuthenticated) {
  //     // 여기에서는 삭제 API를 호출하고, 성공적으로 삭제되면 상태를 업데이트합니다.
  //     // 아래는 간단한 시뮬레이션 코드입니다.

  //     // deleteAccountAPI().then(() => {
  //     //   setDeleted(true);
  //     // }).catch((error) => {
  //     //   console.error('삭제 실패:', error);
  //     // });

  //     // 시뮬레이션: 간단하게 삭제 성공으로 가정
  //     setDeleted(true);
  //   } else {
  //     alert('인증되지 않았습니다. 먼저 비밀번호를 인증하세요.');
  //   }
  // };

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
          <button className={styles.PhotodeleteBtn} onClick={handlePhotoDelete}>
            삭제하기
          </button>
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
    onTitleChange(title); // 입력 값이 변경될 때마다 상태 업데이트
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
