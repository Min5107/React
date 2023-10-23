import "./App.css";
import "./DiaryEditor.css";

import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { useRef, useState } from "react";

// const dummyList = [{
//   id: 1,
//   author: "James1",
//   content: "Hello World1",
//   emotion: 1,
//   create_date: new Date().getTime()
// },{
//   id: 2,
//   author: "James2",
//   content: "Hello World2",
//   emotion: 2,
//   create_date: new Date().getTime()
// },{
//   id: 3,
//   author: "James3",
//   content: "Hello World3",
//   emotion: 3,
//   create_date: new Date().getTime()
// },
// ];

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
