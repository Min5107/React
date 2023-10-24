import React,{ useEffect, useRef, useState } from "react";

const DiaryEditor = ({onCreate}) => {

  useEffect(() => {
    console.log("다이어리 랜더")
  });
  
  const authorInput = useRef();
  const contentInput = useRef();

  const [status, setStatus] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setStatus({
      ...status,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (status.author.length < 1) {
      alert("1글자 이상 적어주세요");
      authorInput.current.focus();
      return;
    }

    if (status.content.length < 5) {
      alert("5글자 이상 적어주세요");
      contentInput.current.focus();
      return;
    }
    onCreate(status.author, status.content, status.emotion);
    console.log(status);

    setStatus({
      author:"",
      content:"",
      status:1,
    });

    alert("저장 성공");
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={status.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={status.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <span>오늘의 감정 요소 : </span>
        <select
          name="emotion"
          value={status.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <button name="diarySubmit" onClick={handleSubmit}>
        일기 저장
      </button>
    </div>
  );
};

export default React.memo(DiaryEditor);
