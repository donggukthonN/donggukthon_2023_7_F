import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Init.css";
import { LOGO, SNOWMAN_IMAGE, Santahat } from "../../assets";

const Init = () => {
  const navigate = useNavigate();
  const imageRef = useRef(null);
  const [textFlag, setTextFlag] = useState(true);
  const [thank, setThank] = useState(false);
  const [snowLocation, setSnowLocation] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const snowmanRef = useRef(null);
  const [position, setPosition] = useState({
    x: window.innerWidth / 2.755,
    y: window.innerHeight / 8,
  });
  const touchStart = useRef({
    x: window.innerWidth / 2.755,
    y: window.innerHeight / 8,
  });

  useEffect(() => {
    const getSnowmanCoordinates = () => {
      if (snowmanRef.current) {
        const { left, top } = snowmanRef.current.getBoundingClientRect();
        setSnowLocation({ x: left + 40, y: top - 40 });
      }
    };
    getSnowmanCoordinates();
  }, []);

  const handleTouchStart = (e) => {
    setTextFlag(false);
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchMove = (e) => {
    const deltaX = e.touches[0].clientX - touchStart.current.x;
    const deltaY = e.touches[0].clientY - touchStart.current.y;

    setPosition((prevPosition) => ({
      x: prevPosition.x + deltaX,
      y: prevPosition.y + deltaY,
    }));

    setOpacity((prevOpacity) => Math.min(prevOpacity + 0.05, 1));
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };

    if (
      Math.abs(position.x - snowLocation.x) < 10 &&
      Math.abs(position.y - snowLocation.y) < 10
    ) {
      setThank(true);
      const timeoutId = setTimeout(() => {
        // 1초 뒤에 '/new-page'로 이동
        navigate("/home");
      }, 1500);

      // 컴포넌트가 언마운트되면 타임아웃 클리어
      return () => clearTimeout(timeoutId);
    }
  };

  return (
    <div className="container">
      <div className="back">
        <div className="title">
          <img
            src={LOGO}
            alt="snowManHouse"
            className="logo"
            style={{ opacity: opacity }}
          />
        </div>
        <img
          src={Santahat}
          alt="santahat"
          ref={imageRef}
          className="santaHat"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          style={{
            position: "absolute",
            left: `${position.x}px`,
            top: `${position.y}px`,
            cursor: "grab",
          }}
        />
        {textFlag && (
          <span
            style={{
              position: "absolute",
              top: "25vh",
              fontSize: "1rem",
              fontWeight: "900",
            }}
          >
            눈사람에게 모자를 씌워주세요
          </span>
        )}
        <img
          src={SNOWMAN_IMAGE}
          alt="snowMan"
          className="snowMan"
          ref={snowmanRef}
        />
        {thank && (
          <span
            style={{
              position: "absolute",
              left: `40vw`,
              top: `50vh`,
              fontSize: "1.1rem",
              fontWeight: "900",
            }}
          >
            고마워요!
          </span>
        )}
      </div>
    </div>
  );
};

export default Init;
